class User < ActiveRecord::Base
  validates :first_name, :last_name, :email, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, uniqueness: true

  has_attached_file :avatar, default_url: "missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :reviews
  has_many :helpfulness

  ratyrate_rater

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
      provider: auth_hash[:provider],
      uid: auth_hash[:uid]
    )

    unless user
      user = User.create!(
        provider: auth_hash[:provider],
        uid: auth_hash[:uid],
        first_name: auth_hash[:info][:name].split.first,
        last_name: auth_hash[:info][:name].split.last,
        email: auth_hash[:info][:name],
        password: SecureRandom::urlsafe_base64
      )
    end

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    password_digest.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def password_digest
    BCrypt::Password.new(super)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
