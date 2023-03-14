import axios from "axios";
import { instance } from "./CustomAxios";


class ApiService{

    defalutAdmin() {
        return instance.post('login');
    }
    
    checkUser(membId) {
        return instance.get('login/checkid/'+ membId );
    }
 
    loginUser(tbMembLogin) {
        console.log(tbMembLogin);
        console.log(JSON.stringify(tbMembLogin));
        
        console.log("인자값 확인");
        return instance.post('login/login', 
         JSON.stringify(tbMembLogin)      
            );
    }

    

    sendNumber(Phone) {
        return instance.post('login/send-one', JSON.stringify(Phone));
    }
    checkNumber(Phone) {
        return instance.post('login/send-two', JSON.stringify(Phone));
    }

    insertUser(tbMembSign) {
        return instance.post('login/sign', JSON.stringify(tbMembSign));
    }



    
    getPayToken() {
        return instance.get('usert');
    };
    
    merchantList(merchantDe) {
        return instance.post('merchant/list', JSON.stringify(merchantDe));
    }

}
export default new ApiService();