class User < ActiveRecord::Base
  validates :first_name, :last_name, :email, :session_token, null: false
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
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
  end

  private

  def password_digest
    BCrypt::Password.new(super)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end