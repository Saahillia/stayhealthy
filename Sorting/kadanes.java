public class kadanes {

    public static void kadanes(int nums[]){
        int ms = Integer.MIN_VALUE;
        int cs = 0;

        for (int i = 0; i < nums.length; i++) {
            cs = cs + nums[i];
            if(cs < 0){
                cs = 0;
            }
            ms = Math.max(cs, ms);
        }
        System.out.println("Our max Subarray sum is  : "+ms);
    }

    public static void main(String[] args){
        int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
        kadanes(arr);
    }
}
