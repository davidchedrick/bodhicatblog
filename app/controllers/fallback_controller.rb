# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: '/home/djc2/Development/code/phase-4/project/phase-4-project/client/public/index.html'
  end
end
