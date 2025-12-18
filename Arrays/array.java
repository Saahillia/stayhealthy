                                                        // operations in arrays
// create, input, output, update

import java.util.*;
public class array{
    public static void main(String[] args) {
                                        // creating an array    
                            // dataType arrayName[] = new dataType[size];
        int marks[] = new int[50];
        int numbers[] = {1, 2, 3};
        int moreNumbers[] = {4, 5, 6};
        String fruits[] = {"apple,", "mango","banana","grapes"};

        // How to take input in an array
        Scanner sc = new Scanner(System.in);
        marks[0] = sc.nextInt();
        marks[1] = sc.nextInt();
        marks[2] = sc.nextInt();

        System.out.println("input given are : ");
        System.out.println(marks[0]);
        System.out.println(marks[1]);
        System.out.println(marks[2]);
        sc.close();

    }
} 