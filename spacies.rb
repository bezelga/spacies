require 'rubygems'
require 'sinatra'

require 'haml'
set :haml, :format => :html5

get '/' do
  haml :index
end

get '/play' do
  haml :play
end

get '/old_school' do
  haml :old_school
end
