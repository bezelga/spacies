require 'rubygems'
require 'sinatra'
#db
#require 'mongo_mapper'
#template
require 'haml'
set :haml, :format => :html5

#configure do
  #MongoMapper.config = {
    #:development => { 'uri' => 'mongodb://localhost/spacies' },
  #}
#end

#configure :development do
  #MongoMapper.connect(:development)
#end

#configure :production do
  #MongoMapper.connect(:production)
#end

class Aircraft
  #include MongoMapper::Document
  #key :name, String, :required => true
end

get '/' do
  haml :index
end

get '/play' do
  haml :play 
end

get '/stages/2' do
  haml :stage2
end


get '/aircrafts' do
  #@aircrafts = Aircraft.all
  haml :aircrafts
end

get '/aircrafts/:name' do
  #Aircraft.create(:name => params[:name])
  redirect '/aircrafts'
end
