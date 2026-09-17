const CHALLENGE_DAYS = 75;

const LEETCODE_PROFILE = "https://leetcode.com/u/jaigupta18/";

// status:
// "done"    -> completed day
// "missed"  -> missed day
// "pending" -> upcoming day

const dsaData = [

    
    {
    day: 0,
    date: "Jul 23 – Jul 26, 2026",
    status: "history",
    topic: "Arrays, Two Pointer , Prefix Sum",

    questions: [
        {
            number: 628,
            name: "Maximum Product of Three Numbers",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximum-product-of-three-numbers/"
        },
        {
            number: 438,
            name: "Find All Anagrams in a String",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
        },
        {
            number: 42,
            name: "Trapping Rain Water",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/trapping-rain-water/"
        },
        {
            number: 11,
            name: "Container With Most Water",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/container-with-most-water/"
        },
        {
            number: 125,
            name: "Valid Palindrome",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/valid-palindrome/"
        },
        {
            number: 15,
            name: "3Sum",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/3sum/"
        },
        {
            number: 167,
            name: "Two Sum II - Input Array Is Sorted",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
        },
        {
            number: 283,
            name: "Move Zeroes",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/move-zeroes/"
        }
    ],

    theory: [],

    notes: "Problems solved during the week before starting the 45-day challenge."
},

    // =========================
    // DAY 1 - JUL 30
    // =========================
    {
        day: 1,
        date: "Jul 30, 2026",
        status: "done",
        topic: "Sliding Window & Strings",

        questions: [
          {
                number: 0,
                name: "Count-occurences-of-anagrams",
                difficulty: "Medium",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1"
            },
            {
                number: 209,
                name: "Minimum Size Subarray Sum",
                difficulty: "Medium",
                //if we don't provide platform, it will make LeetCode the default
                platform: "LeetCode",
                link: "https://leetcode.com/problems/minimum-size-subarray-sum/"
            },
            {
                number: 0,
                name: "First-negative-integer-in-every-window-of-size-k",
                difficulty: "Medium",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1"
            },
            {
                number: 151,
                name: "Reverse Words in a String",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/reverse-words-in-a-string/"
            }
        ],

        theory: ["Sliding Window", "Strings"],

        notes: "",

    },


    // =========================
    // DAY 2 - JUL 31
    // =========================
    {
        day: 2,
        date: "Jul 31, 2026",
        status: "done",
        topic: "Hashing & Sliding Window",

        questions: [
            {
                number: 219,
                name: "Contains Duplicate II",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/contains-duplicate-ii/"
            },
            {
                number: 76,
                name: "Minimum Window Substring",
                difficulty: "Hard",
                link: "https://leetcode.com/problems/minimum-window-substring/"
            }
        ],

        theory: ["Hashing", "Sliding Window"],

        notes: "",

    },


    // =========================
    // DAY 3 - AUG 1
    // =========================
    {
        day: 3,
        date: "Aug 1, 2026",
        status: "done",
        topic: "Sliding Window & Arrays",

        questions: [
            {
                number: 3014,
                name: "Minimum Number of Pushes to Type Word I",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/"
            },
            {
                number: 2444,
                name: "Count Subarrays With Fixed Bounds",
                difficulty: "Hard",
                link: "https://leetcode.com/problems/count-subarrays-with-fixed-bounds/"
            },
            {
                number: 1456,
                name: "Maximum Number of Vowels in a Substring of Given Length",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/"
            },
            {
                number: 2090,
                name: "K Radius Subarray Averages",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/k-radius-subarray-averages/"
            },
            {
                number: 658,
                name: "Find K Closest Elements",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/find-k-closest-elements/"
            },
            {
                number: 567,
                name: "Permutation in String",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/permutation-in-string/"
            },
            {
                number: 724,
                name: "Find Pivot Index",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/find-pivot-index/"
            }
        ],

        theory: ["Sliding Window" , "Arrays"],

        notes: "",

        
    },


    // =========================
    // DAY 4 - AUG 2
    // =========================
    {
        day: 4,
        date: "Aug 2, 2026",
        status: "done",
        topic: "Sliding Window & Arrays",

        questions: [
            {
                number: 121,
                name: "Best Time to Buy and Sell Stock",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
            },
            {
                number: 239,
                name: "Sliding Window Maximum",
                difficulty: "Hard",
                link: "https://leetcode.com/problems/sliding-window-maximum/"
            },
            {
                number: 0,
                name: "Longest-k-unique-characters-substring",
                difficulty: "Medium",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1"
            },
            {
                number: 3,
                name: "Longest Substring Without Repeating Characters",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
            }
        ],

        theory: ["Sliding Window"],

        notes: "",

        
    },


    // =========================
    // DAY 5 - AUG 3
    // =========================
    {
        day: 5,
        date: "Aug 3, 2026",
        status: "done",
        topic: "Binary Search",

        questions: [
            {
                number: 704,
                name: "Binary Search",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/binary-search/"
            },
            {
                number: 33,
                name: "Search in Rotated Sorted Array",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
            },
            {
                number: 162,
                name: "Find Peak Element",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/find-peak-element/"
            }
        ],

        theory: ["Binary Search"],

        notes: "",

        
    },


    // =========================
    // DAY 6 - AUG 4
    // =========================
    {
        day: 6,
        date: "Aug 4, 2026",
        status: "done",
        topic: "Binary Search",

        questions: [
            {
                number: 3731,
                name: "Find Missing Elements",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/find-missing-elements/"
            },
            {
                number: 34,
                name: "Find First and Last Position of Element in Sorted Array",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
            },
            {
                number: 189,
                name: "Rotate Array",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/rotate-array/"
            },
            {
                number: 0,
                name: "Ceil-in-a-sorted-array",
                difficulty: "Easy",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1"
            },
            {
                number: 0,
                name: "Floor-in-a-sorted-array",
                difficulty: "Easy",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1"
            }
        ],

        theory: ["Lower-Upper Bound",
        "Classic Binary Search"],

        notes: "",

        
    },


    // =========================
    // DAY 7 - AUG 5
    // =========================
    {
        day: 7,
        date: "Aug 5, 2026",
        status: "done",
        topic: "Binary Search",

        questions: [
           {
                number: 118,
                name: "Pascals Triangle",
                difficulty: "Easy",
                link: "https://leetcode.com/problems/pascals-triangle/"
            }
            
        ],

        theory: [
        "Arrays"
       ],

        notes: "",
        
    },
    // =========================
    // DAY 8 - AUG 6
    // =========================
    {
        day: 8,
        date: "Aug 6, 2026",
        status: "done",
        topic: "Binary Search",

        questions: [
           {
                number: 875,
                name: "koko-eating-bananas",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/koko-eating-bananas/ "
            },
            {
                number: 0,
                name: "Aggressive-cows",
                difficulty: "Medium",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/aggressive-cows/1"
            },
            {
                number: 0,
                name: "Allocate-minimum-number",
                difficulty: "Medium",
                //if we don't provide platform, it will make LeetCode the default
                platform: "GFG",
                link: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1"
            },
            {
                number: 153,
                name: "Find-minimum-in-rotated-sorted-array",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
            }
            
        ],

        theory: [
        
       ],

        notes: "Binary Search on Answers",
        
    },
    // =========================
// DAY 9 - AUG 7
// =========================
{
    day: 9,
    date: "Aug 7, 2026",
    status: "done",
    topic: "Arrays",

    questions: [
        {
            number: 1732,
            name: "Find the Highest Altitude",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/find-the-highest-altitude/"
        },
        {
            number: 1331,
            name: "Rank Transform of an Array",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/rank-transform-of-an-array/"
        },
        {
            number: 1464,
            name: "Maximum Product of Two Elements in an Array",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"
        },
        {
            number: 3345,
            name: "Smallest Divisible Digit Product I",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/smallest-divisible-digit-product-i/"
        }
    ],

    theory: ["Heap and Priority Queue Theory"],

    notes: "Random Questions"
},


// =========================
// DAY 10 - AUG 8
// =========================
{
    day: 10,
    date: "Aug 8, 2026",
    status: "done",
    topic: "Strings",

    questions: [
        {
            number: 28,
            name: "Find the Index of the First Occurrence in a String",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
        }
    ],

    theory: [],

    notes: "Heap and Priority Queue and it's basics question done in theory"
},
// =========================
// DAY 11 - AUG 9
// =========================
{
    day: 11,
    date: "Aug 9, 2026",
    status: "done",
    topic: "Heap and Priority Queue",

    questions: [
        {
            number: 239,
            name: "Sliding Window Maximum",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/sliding-window-maximum/"
        },
        {
            number: 621,
            name: "Task Scheduler",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/task-scheduler/"
        },
        {
            number: 373,
            name: "Find K Pairs with Smallest Sums",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
        },
        {
            number: 347,
            name: "Top K Frequent Elements",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/top-k-frequent-elements/"
        },
        {
            number: 0,
            name: "Minimum-cost-of-ropes",
            difficulty: "Medium",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1"
        },
        {
            number: 767,
            name: "Reorganize string",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/reorganize-string/"
        },
        {
            number: 0,
            name: "Optimal-file-merge",
            difficulty: "Medium",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/optimal-file-merge/1"
        }

    ],

    theory: ["Heap and Priority Queue"],

    notes: "Heap and Priority Queue and it's basics question done in theory"
},


// =========================
// DAY 12 - AUG 10
// =========================
{
    day: 12,
    date: "Aug 10, 2026",
    status: "done",
    topic: "Linked List",

    questions: [
        {
            number: 203,
            name: "Find the Index of the First Occurrence in a String",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/remove-linked-list-elements/"
        }
    ],

    theory: ["Linked List"],

    notes: "Linked List and it's basics question done in theory"
},
// =========================
// DAY 13 - AUG 11
// =========================
{
    day: 13,
    date: "Aug 11, 2026",
    status: "done",
    topic: "Linked List",

    questions: [

        {
            number: 19,
            name: "Remove Nth Node From End of List",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
        },

        {
            number: 141,
            name: "Linked List Cycle",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/linked-list-cycle/"
        },

        {
            number: 707,
            name: "Design Linked List",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/design-linked-list/"
        },

        {
            number: 328,
            name: "Odd Even Linked List",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/odd-even-linked-list/"
        }

    ],

    theory: [
        "Linked List"
    ],

    notes: "Linked List and its basic questions done in theory"
},
// =========================
// DAY 14 - AUG 12
// =========================
{
    day: 14,
    date: "Aug 12, 2026",
    status: "done",
    topic: "Linked List",

    questions: [
        {
            number: 206,
            name: "Reverse Linked List",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/reverse-linked-list/"
        },
        {
            number: 234,
            name: "Palindrome Linked List",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/palindrome-linked-list/"
        },
        {
            number: 92,
            name: "Reverse Linked List II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/reverse-linked-list-ii/"
        },
        {
            number: 0,
            name: "Search-in-linked-list",
            difficulty: "Easy",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1"
        }
    ],

    theory: [
        "Linked List"
    ],

    notes: "Practiced linked list reversal and palindrome problems."
},
// =========================
// DAY 15 - AUG 13
// =========================
{
    day: 15,
    date: "Aug 13, 2026",
    status: "done",
    topic: "Linked List",

    questions: [
        {
            number: 61,
            name: "Roatate List",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/rotate-list/"
        },
        {
            number: 25,
            name: "Reverse nodes-in-k-group",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
        }
    ],

    theory: [
        "Linked List"
    ],

    notes: ""
},
// =========================
// DAY 16 - AUG 14
// =========================
{
    day: 16,
    date: "Aug 14, 2026",
    status: "done",
    topic: "Stacks",

    questions: [
        {
            number: 901,
            name: "Online Stock Span",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/online-stock-span/"
        },
        {
            number: 739,
            name: "Daily Temperatures",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/daily-temperatures/"
        },
        {
            number: 503,
            name: "Next Greater Element II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/next-greater-element-ii/"
        }
    ],

    theory: ["Stacks"],

    notes: "Stacks and its basic questions done in theory"
},
// =========================
// DAY 17 - AUG 15
// =========================
{
    day: 17,
    date: "Aug 15, 2026",
    status: "done",
    topic: "Stacks",

    questions: [
        {
            number: 0,
            name: "Next Larger Element",
            difficulty: "Medium",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1"
        },
        {
            number: 20,
            name: "Valid Parentheses",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/valid-parentheses/"
        }
    ],

    theory: ["Stack"],

    notes: "Studied Stack theory and solved 6 problems based on it"
},
// =========================
// DAY 18 - AUG 16
// =========================
{
    day: 18,
    date: "Aug 16, 2026",
    status: "done",
    topic: "Stacks",

    questions: [
        {
            number: 85,
            name: "Maximal Rectangle",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximal-rectangle/"
        },
        {
            number: 84,
            name: "Largest Rectangle in Histogram",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
        }
    ],

    theory: ["Stack and Monotonic Stack"],

    notes: "Practiced Largest Rectangle in Histogram and used the concept to solve Maximal Rectangle."
},


// =========================
// DAY 19 - AUG 17
// =========================
{
    day: 19,
    date: "Aug 17, 2026",
    status: "done",
    topic: "Recursion",

    questions: [
        {
            number: 50,
            name: "Pow(x, n)",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/powx-n/"
        }
    ],

    theory: ["Recursion"],

    notes: "Recursion Theory and its basic questions solved"
},
{
    day: 20,
    date: "Aug 18, 2026",
    status: "done",
    topic: "Recursion",

    questions: [
        {
            number: 349,
            name: "Intersection of two Arrays",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/intersection-of-two-arrays/"
        }
    ],

    theory: ["Recursion"],

    notes: "Recursion Theory and its basic questions solved"
},
// =========================
// DAY 21 - AUG 19
// =========================
{
    day: 21,
    date: "Aug 19, 2026",
    status: "done",
    topic: "Recursion",

    questions: [
        {
            number: 509,
            name: "Fibonacci Number",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/fibonacci-number/"
        },
        {
            number: 70,
            name: "Climbing Stairs",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/climbing-stairs/"
        }
    ],

    theory: ["Recursion"],

    notes: "Practiced basic recursion and recursion-to-iteration concepts with Fibonacci Number and Climbing Stairs."
},


// =========================
// DAY 22 - AUG 20
// =========================
{
    day: 22,
    date: "Aug 20, 2026",
    status: "done",
    topic: "Recursion",

    questions: [
        {
            number: 3072,
            name: "Distribute Elements Into Two Arrays I",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/distribute-elements-into-two-arrays-i/"
        },
        {
            number: 62,
            name: "Unique Paths",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/unique-paths/"
        }
    ],

    theory: ["Recursion"],

    notes: "Practiced recursion with array distribution and Unique Paths."
},


// =========================
// DAY 23 - AUG 21
// =========================
{
    day: 23,
    date: "Aug 21, 2026",
    status: "done",
    topic: "Backtracking",

    questions: [
        {
            number: 39,
            name: "Combination Sum",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/combination-sum/"
        },
        {
            number: 77,
            name: "Combinations",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/combinations/"
        },
        {
            number: 46,
            name: "Permutations",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/permutations/"
        }
    ],

    theory: ["Backtracking"],

    notes: "Started backtracking with Combination Sum, Combinations, and Permutations."
},
// =========================
// DAY 24 - AUG 22
// =========================
{
    day: 24,
    date: "Aug 22, 2026",
    status: "done",
    topic: "Recursion & Backtracking",

    questions: [
        {
            number: 47,
            name: "Permutations II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/permutations-ii/"
        },
        {
            number: 40,
            name: "Combination Sum II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/combination-sum-ii/"
        },
        {
            number: 78,
            name: "Subsets",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/subsets/"
        },
        {
            number: 90,
            name: "Subsets II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/subsets-ii/"
        },
        {
            number: 0,
            name: "Palindrome",
            difficulty: "Easy",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/palindrome0746/1"
        },
        {
            number: 0,
            name: "Print 1 to N Without Using Loops",
            difficulty: "Easy",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops3621/1"
        },
        {
            number: 0,
            name: "Factorial",
            difficulty: "Easy",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/factorial5739/1"
        }
    ],

    theory: ["Backtracking, Recursion"],

    notes: "Practiced advanced backtracking problems."
},
// =========================
// DAY 25 - AUG 23
// =========================
{
    day: 25,
    date: "Aug 23, 2026",
    status: "done",
    topic: "Backtracking & Recursion",

    questions: [
        {
            number: 22,
            name: "Generate Parentheses",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/generate-parentheses/"
        },
        {
            number: 90,
            name: "Subsets II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/subsets-ii/"
        }
    ],

    theory: [
        "Backtracking",
        "Recursion"
    ],

    notes: "Practiced advanced backtracking along with recursion basics using Permutations II, Combination Sum II, Subsets, Subsets II, Palindrome, Print 1 to N Without Using Loops, and Factorial."
},


// =========================
// DAY 26 - AUG 24
// =========================
{
    day: 26,
    date: "Aug 24, 2026",
    status: "done",
    topic: "Backtracking",

    questions: [
        {
            number: 17,
            name: "Letter Combinations of a Phone Number",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
        },
        {
            number: 1219,
            name: "Path with Maximum Gold",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/path-with-maximum-gold/"
        },
        {
            number: 507,
            name: "Perfect Number",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/perfect-number/"
        }
    ],

    theory: [
        "Backtracking"
    ],

    notes: "Practiced backtracking and recursion problems."
},


// =========================
// DAY 27 - AUG 25
// =========================
{
    day: 27,
    date: "Aug 25, 2026",
    status: "done",
    topic: "Arrays & Backtracking",

    questions: [
        {
            number: 2999,
            name: "Smallest Missing Multiple of K",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/smallest-missing-multiple-of-k/"
        },
        {
            number: 0,
            name: "Min Steps by Knight",
            difficulty: "Medium",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/problems/steps-by-knight5927/1"
        }
    ],

    theory: [
        "Arrays"
    ],

    notes: "Practiced array and divisibility concepts."
},


// =========================
// DAY 28 - AUG 26
// =========================
{
    day: 28,
    date: "Aug 26, 2026",
    status: "done",
    topic: "Sorting",

    questions: [
        {
            number: 506,
            name: "Relative Ranks",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/relative-ranks/"
        }
    ],

    theory: [
        "Sorting"
    ],

    notes: "Practiced sorting and ranking elements."
},


// =========================
// DAY 29 - AUG 27
// =========================
{
    day: 29,
    date: "Aug 27, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 367,
            name: "Valid Perfect Square",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/valid-perfect-square/"
        },
        {
            number: 104,
            name: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
        },
        {
            number: 101,
            name: "Symmetric Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/symmetric-tree/"
        },
        {
            number: 112,
            name: "Path Sum",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/path-sum/"
        },
        {
            number: 113,
            name: "Path Sum II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/path-sum-ii/"
        }
    ],

    theory: [
        "Binary Trees"
    ],

    notes: "Practiced binary tree basics including depth, symmetry, and path sum problems."
},


// =========================
// DAY 30 - AUG 28
// =========================
{
    day: 30,
    date: "Aug 28, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 144,
            name: "Binary Tree Preorder Traversal",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-preorder-traversal/"
        },
        {
            number: 94,
            name: "Binary Tree Inorder Traversal",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
        }
    ],

    theory: [
        "Binary Tree"
    ],

    notes: "Practiced binary tree traversal using Preorder and Inorder traversal."
},
// =========================
// DAY 31 - AUG 29
// =========================
{
    day: 31,
    date: "Aug 29, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 145,
            name: "Binary Tree Postorder Traversal",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-postorder-traversal/"
        }
    ],

    theory: [
        "Binary Tree"
    ],

    notes: ""
},
// =========================
// DAY 32 - AUG 30
// =========================
{
    day: 32,
    date: "Aug 30, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 111,
            name: "Minimum Depth of Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced binary tree depth problems and basic question done in theory"
},


// =========================
// DAY 33 - AUG 31
// =========================
{
    day: 33,
    date: "Aug 31, 2026",
    status: "done",
    topic: "Arrays",

    questions: [
        {
            number: 26,
            name: "Remove Duplicates from Sorted Array",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
        }
    ],

    theory: ["Arrays"],

    notes: "Random"
},


// =========================
// DAY 34 - SEP 1
// =========================
{
    day: 34,
    date: "Sep 1, 2026",
    status: "done",
    topic: "Queue",

    questions: [
        {
            number: 232,
            name: "Implement Queue using Stacks",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/implement-queue-using-stacks/"
        }
    ],

    theory: ["Queue"],

    notes: "Queue and its basic question done in theory"
},


// =========================
// DAY 35 - SEP 2
// =========================
{
    day: 35,
    date: "Sep 2, 2026",
    status: "done",
    topic: "Queue",

    questions: [
        {
            number: 622,
            name: "Design Circular Queue",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/design-circular-queue/"
        }
    ],

    theory: ["Queue"],

    notes: "Queue and its basic question done in theory"
},


// =========================
// DAY 36 - SEP 3
// =========================
{
    day: 36,
    date: "Sep 3, 2026",
    status: "done",
    topic: "Trees & Arrays",

    questions: [
        {
            number: 102,
            name: "Binary Tree Level Order Traversal",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
        },
        {
            number: 3876,
            name: "Construct Uniform Parity Array II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/construct-uniform-parity-array-ii/"
        }
    ],

    theory: ["Trees", "Arrays"],

    notes: "Binary Tree"
},


// =========================
// DAY 37 - SEP 4
// =========================
{
    day: 37,
    date: "Sep 4, 2026",
    status: "done",
    topic: "Arrays",

    questions: [
        {
            number: 3903,
            name: "Smallest Stable Index I",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/smallest-stable-index-i/"
        }
    ],

    theory: ["Arrays"],

    notes: "Random"
},


// =========================
// DAY 38 - SEP 5
// =========================
{
    day: 38,
    date: "Sep 5, 2026",
    status: "done",
    topic: "Strings",

    questions: [
        {
            number: 1209,
            name: "Remove All Adjacent Duplicates in String II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/"
        },
        {
            number: 3904,
            name: "Smallest Stable Index II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/smallest-stable-index-ii"
        }
    ],

    theory: ["Strings", "Stack"],

    notes: "Random"
},


// =========================
// DAY 39 - SEP 6
// =========================
{
    day: 39,
    date: "Sep 6, 2026",
    status: "done",
    topic: "Linked List",

    questions: [
        {
            number: 83,
            name: "Remove Duplicates from Sorted List",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
        }
    ],

    theory: ["Linked List"],

    notes: "Random"
},
// =========================
// DAY 40 - SEP 7
// =========================
{
    day: 40,
    date: "Sep 7, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 100,
            name: "Same Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/same-tree/"
        },
        {
            number: 226,
            name: "Invert Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/invert-binary-tree/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced basic binary tree comparison and inversion."
},


// =========================
// DAY 41 - SEP 8
// =========================
{
    day: 41,
    date: "Sep 8, 2026",
    status: "done",
    topic: "Trees",

    questions: [{
            number: 226,
            name: "Invert Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/invert-binary-tree/"
        }],

    theory: ["Binary Trees"],

    notes: ""
},


// =========================
// DAY 42 - SEP 9
// =========================
{
    day: 42,
    date: "Sep 9, 2026",
    status: "done",
    topic: "Arrays",

    questions: [
        {
            number: 3870,
            name: "Count Commas in Range",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/count-commas-in-range/"
        },
        {
            number: 3871,
            name: "Count Commas in Range II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/count-commas-in-range-ii/"
        }
    ],

    theory: ["Arrays"],

    notes: "Practiced array and range-based counting problems."
},


// =========================
// DAY 43 - SEP 10
// =========================
{
    day: 43,
    date: "Sep 10, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 543,
            name: "Diameter of Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/diameter-of-binary-tree/"
        },
        {
            number: 112,
            name: "Path Sum",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/path-sum/"
        },
        {
            number: 104,
            name: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
        },
        {
            number: 101,
            name: "Symmetric Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/symmetric-tree/"
        },
        {
            number: 110,
            name: "Balanced Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/balanced-binary-tree/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced binary tree depth, balance, symmetry, path sum, and diameter problems."
},


// =========================
// DAY 44 - SEP 11
// =========================
{
    day: 44,
    date: "Sep 11, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 2265,
            name: "Count Nodes Equal to Average of Subtree",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced subtree calculations using DFS."
},


// =========================
// DAY 45 - SEP 12
// =========================
{
    day: 45,
    date: "Sep 12, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 257,
            name: "Binary Tree Paths",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-paths/"
        },
        {
            number: 3483,
            name: "Unique 3-Digit Even Numbers",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/unique-3-digit-even-numbers/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced binary tree path generation and a number construction problem."
},


// =========================
// DAY 46 - SEP 13
// =========================
{
    day: 46,
    date: "Sep 13, 2026",
    status: "done",
    topic: "Trees & Backtracking",

    questions: [
        {
            number: 1123,
            name: "Lowest Common Ancestor of Deepest Leaves",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/"
        },
        {
            number: 236,
            name: "Lowest Common Ancestor of a Binary Tree",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
        },
        {
            number: 113,
            name: "Path Sum II",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/path-sum-ii/"
        },
        {
            number: 1079,
            name: "Letter Tile Possibilities",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/letter-tile-possibilities/"
        },
        {
            number: 791,
            name: "Custom Sort String",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/custom-sort-string/"
        },
        {
            number: 739,
            name: "Daily Temperatures",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/daily-temperatures/"
        }
    ],

    theory: [
        "Binary Trees",
        "Backtracking",
        "Stacks"
    ],

    notes: "Heavy practice day covering binary tree traversal, tree construction, LCA, path problems, backtracking, custom sorting, and monotonic stack."
},


// =========================
// DAY 47 - SEP 14
// =========================
{
    day: 47,
    date: "Sep 14, 2026",
    status: "done",
    topic: "Stacks",

    questions: [{
            number: 739,
            name: "Daily Temperatures",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/daily-temperatures/"
        }],

    theory: ["Stacks"],

    notes: ""
},


// =========================
// DAY 48 - SEP 15
// =========================
{
    day: 48,
    date: "Sep 15, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 105,
            name: "Construct Binary Tree from Preorder and Inorder Traversal",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
        },
        {
            number: 836,
            name: "Rectangle Overlap",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/rectangle-overlap/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced binary tree construction and rectangle overlap."
},


// =========================
// DAY 49 - SEP 16
// =========================
{
    day: 49,
    date: "Sep 16, 2026",
    status: "done",
    topic: "Trees",

    questions: [
        {
            number: 103,
            name: "Binary Tree Zigzag Level Order Traversal",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
        },
        {
            number: 889,
            name: "Construct Binary Tree from Preorder and Postorder Traversal",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/"
        },
        {
            number: 106,
            name: "Construct Binary Tree from Inorder and Postorder Traversal",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
        }
    ],

    theory: ["Binary Trees"],

    notes: "Practiced binary tree traversal and construction from different traversal combinations."
}

];