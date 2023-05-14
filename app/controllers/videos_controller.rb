class VideosController < ApplicationController
  before_action :set_video, only: %i[ show edit update destroy ]

  def index
    @videos = Video.with_attached_thumbnail.all.order(created_at: :desc)
  end

  def search
    @videos = Video.with_attached_thumbnail.where("title ILIKE ?", "%"+ Video.sanitize_sql_like(params[:query]) +"%").order(created_at: :desc)
  end

  def show
  end

  def new
    @video = Video.new
  end

  def edit
  end

  def create
    @video = Video.new(video_params)
    respond_to do |format|
      if @video.save
        format.html { flash[:notice] = "Video was successfully created." }
        format.json { render :show, status: :created, location: @video }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @video.update(video_params)
        format.html { flash[:notice] = "Video was successfully updated." }
        format.json { render :show, status: :ok, location: @video }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @video.destroy

    respond_to do |format|
      format.html { redirect_to videos_url, notice: "Video was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    def set_video
      @video = Video.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      redirect_to root_path, alert: "Video doesn't exist."
    end

    def video_params
      params.require(:video).permit(:title, :description, :clip, :thumbnail)
    end
end
