class UploadsController < ApplicationController
  respond_to :html, :xml, :json
  respond_to :js, :only => [:create, :update, :destroy]
  # GET /upload
  # GET /upload.xml
  def index
    @uploads = Upload.all
    @upload = Upload.new
    #respond_with(@upload, :layout => false)
    respond_with do |format|
      format.html { render :layout => ! request.xhr? }
    end

  end

  # GET /upload/1
  # GET /upload/1.xml
  def show
    @upload = Upload.find(params[:id])
  end

  # GET /upload/new
  # GET /upload/new.xml
  def new
    @upload = Upload.new
    #respond_with(@upload, :layout => false)
    respond_with do |format|
      format.html { render :layout => ! request.xhr? }
    end
  end

  # GET /uploads/1/edit
  def edit
    @upload = Upload.find(params[:id])
  end

  # POST /uploads
  # POST /uploads.xml
  def create
    @upload = Upload.create(upload_params)
    if request.xhr? || remotipart_submitted?
      sleep 1 if params[:pause]
      render :layout => false, :template => (params[:template] == 'escape' ? 'uploads/escape_test' : 'uploads/create'), :status => (@upload.errors.any? ? :unprocessable_entity : :ok)
    else
      redirect_to uploads_path
    end
  end

  # PUT /uploads/1
  # PUT /uploads/1.xml
  def update
    @upload = Upload.find(params[:id])
    respond_with do |format|
      format.html{ redirect_to @upload }
    end
  end

  # DELETE /uploads/1
  # DELETE /uploads/1.xml
  def destroy
    @upload = Upload.destroy(params[:id])
  end

  private

  def upload_params
    params.require(:upload).permit(:name, :email, :massage, :attachment, :other_attachment)
  end
end
