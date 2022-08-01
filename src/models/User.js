import APIFunction from "../service";
import LocalStorageService from '../service/LocalStorageService.js'

const localStorageService = LocalStorageService.getService();

export const LoginFunction = (params) => {
    return APIFunction.Login(params).then(res => {
        if (res.success) {
            localStorageService.setToken(res.data.authorization)
            localStorageService.setUserInfor(res.data.user)
        } else {
            localStorageService.clearToken();
        }
        return res;
    }).catch(err => {
        localStorageService.clearToken();
        localStorageService.clearUserInfor();
        return err;
    })
}