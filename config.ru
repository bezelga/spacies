require 'bundler'

Bundler.require(:default)

require './spacies'
run Sinatra::Application
