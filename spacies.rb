require 'rubygems'
require 'sinatra'
#require 'json'
#require 'haml'
#require 'mongoid'

#configure do
   #Mongoid.configure do |config|
    #name = "spacies"
    #host = "localhost"
    #config.master = Mongo::Connection.new.db(name)
    #config.slaves = [
      #Mongo::Connection.new(host, 27017, :slave_ok => true).db(name)
    #]
    #config.persist_in_safe_mode = false
  #end
#end

#set :haml, :format => :html5

get '/' do
  "hi"
  #haml :index
end

#get '/stream' do
  #Stream.new
#end

#get '/aircrafts/:id' do
  #"hello #{params[:id]}".to_json
#end

#post '/aircrafts' do
  ##create new_aircraft
#end


#class Stream
  #def each
    #100.times {|x| yield "#{x}\n" }
  #end
#end
