var findErrorNums = function(nums) {
    let arr=new Array(nums.length).fill(-1);
    let result=[];
	
    nums.forEach(el=>{
	// get missing
        if(arr[el-1]!==-1) result[0]=el;
        arr[el-1]=el;
    });
	
	// get duplicate
    result[1]=arr.indexOf(-1)+1
    return result;
}