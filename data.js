const CHALLENGE_DAYS = 30;

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

    notes: "Problems solved during the week before starting the 30-day challenge."
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
}


];