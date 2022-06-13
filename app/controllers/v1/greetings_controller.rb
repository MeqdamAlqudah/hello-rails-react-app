class V1::GreetingsController < ApplicationController
  def index
    render json: {
      greeting: Message.all.order('RANDOM()').first[:greetingmessage]
    }.to_json
  end
end
