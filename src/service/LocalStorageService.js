const LocalStorageService = (function () {
    var _service;
  
    function _getService() {
      if (!_service) {
        _service = this;
        return _service
      }
      return _service
    }
    
    function _setToken(tokenObj) {
      localStorage.setItem('access_token',  tokenObj ? tokenObj.access_token : '');
      localStorage.setItem('refresh_token', tokenObj ? tokenObj.refresh_token: '');
    }
    function _getAccessToken() {
      return localStorage.getItem('access_token');
    }
    function _getRefreshToken() {
      return localStorage.getItem('refresh_token');
    }
    function _clearToken() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  
  
    function _setUserInfor(userInfor) {
      localStorage.setItem('full_name',  userInfor ? userInfor.full_name : null);
    }
    function _getUserInfor() {
      return localStorage.getItem('full_name');
    }
  
    function _clearUserInfor() {
      localStorage.removeItem('full_name');
    }
  
    return {
      getService: _getService,
      setToken: _setToken,
      getAccessToken: _getAccessToken,
      getRefreshToken: _getRefreshToken,
      clearToken: _clearToken,
      setUserInfor: _setUserInfor,
      getUserInfor: _getUserInfor,
      clearUserInfor: _clearUserInfor,
    }
  })();
  export default LocalStorageService;