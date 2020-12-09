class Api::MenusController < ApplicationController

    def index
        @menus = Menu.all
        render :index
    end
    
end
