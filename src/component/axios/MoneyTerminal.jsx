import axios from "axios";
import { instance } from "./CustomAxios";

class Moeny{

        nowMoney(tbMembLogin) {
            return instance.post("money/now", JSON.stringify(tbMembLogin));
    }
    ChargeMoney(money) {
        return instance.post("money/updatemoney", JSON.stringify(money));
    }

    buySell(tbMembTrade)
    {
        return instance.post("money/trade", JSON.stringify(tbMembTrade));
            
            
    }   


}
export default new Moeny();