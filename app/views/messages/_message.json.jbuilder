json.extract! message, :id, :greetingmessage, :created_at, :updated_at
json.url message_url(message, format: :json)
