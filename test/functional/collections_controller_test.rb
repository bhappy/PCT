require 'test_helper'

class CollectionsControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get add" do
    get :add
    assert_response :success
  end

  test "should get remove" do
    get :remove
    assert_response :success
  end

end
