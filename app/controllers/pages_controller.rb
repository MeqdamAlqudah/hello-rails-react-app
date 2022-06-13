class PagesController < ApplicationController
  def index
    @greeting = Message.all.order('RANDOM()').first[:greetingmessage]
  end
end
