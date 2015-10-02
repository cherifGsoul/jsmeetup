import can from "can";
import "can/map/define/";
import Email from "models/email";

export default can.Map.extend({
	define:{
		emails:{
			get(list){
				return list.filterByFolder(this.attr('folder'));
			}
		}
	}
});
