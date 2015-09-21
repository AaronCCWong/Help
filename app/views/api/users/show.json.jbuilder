json.extract! @user, :id, :first_name, :last_name
json.avatar_url asset_path(@user.avatar.url(:original))
