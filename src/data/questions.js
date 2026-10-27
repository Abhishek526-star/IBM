export const questions = [
  {
    "id": "IBM-001",
    "title": "Tree Pythagorean Triples",
    "difficulty": "Medium",
    "topics": [
      "Breadth-First Search",
      "Graph",
      "Tree"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-10-17",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-tree-pythagorean-triples",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "You are given an undirected tree with vertices numbered from 1 through n , along with three fixed vertices x , y , and z .\n\nFor every vertex v , compute its unweighted edge distances to x , y , and z . Sort those three distances as a <= b <= c . Count the vertices for which all three distances are positive and a * a + b * b == c * c .\n\nThe fixed vertices may coincide. A vertex with distance zero to any of them does not contribute to the answer.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 1000 .\nedges.length == n - 1 .\nEvery edge contains two distinct vertex IDs in [1, n] , and the edges form one connected tree.\n1 <= x, y, z <= n ; the three fixed vertices may coincide.",
    "examples": [
      {
        "input": "n\n=\n9\nedges\n=\n[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]\nx\n=\n1\ny\n=\n8\nz\n=\n9\nreturn\n=\n1",
        "output": "1",
        "explanation": "Vertex 4 has distances 3, 4, and 5, so it contributes. No other vertex forms a positive Pythagorean triple."
      },
      {
        "input": "n\n=\n4\nedges\n=\n[[1,2],[1,3],[1,4]]\nx\n=\n2\ny\n=\n3\nz\n=\n4\nreturn\n=\n0",
        "output": "0",
        "explanation": "The center has distances 1, 1, and 1. Every leaf has one zero distance, so the answer is zero."
      },
      {
        "input": "n\n=\n13\nedges\n=\n[[1,2],[2,3],[3,4],[1,5],[5,6],[6,7],[7,8],[1,9],[9,10],[10,11],[11,12],[12,13]]\nx\n=\n4\ny\n=\n8\nz\n=\n13\nreturn\n=\n1",
        "output": "1",
        "explanation": "The three branches give the center distances 3, 4, and 5. The traversal checks every vertex rather than only the branch point."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n9\nedges\n=\n[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]\nx\n=\n1\ny\n=\n8\nz\n=\n9",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "n\n=\n4\nedges\n=\n[[1,2],[1,3],[1,4]]\nx\n=\n2\ny\n=\n3\nz\n=\n4",
        "expected": "0",
        "hidden": false
      },
      {
        "input": "n\n=\n13\nedges\n=\n[[1,2],[2,3],[3,4],[1,5],[5,6],[6,7],[7,8],[1,9],[9,10],[10,11],[11,12],[12,13]]\nx\n=\n4\ny\n=\n8\nz\n=\n13",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n, edges, x, y, z) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n, edges, x, y, z):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n, int[][] edges, int x, int y, int z) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n, vector<vector<int>>& edges, int x, int y, int z) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-002",
    "title": "Minimum Power-of-Two Removal Operations",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Math",
      "Greedy"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-10-14",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-power-of-two-removal-operations",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given an array arr of nonnegative integer exponents. Each element arr[i] represents the value 2^arr[i] .\n\nIn one operation, select a nonempty group of remaining elements and remove them. The operation is allowed only if the sum of their represented values is exactly 2^p for some integer p >= 0 .\n\nYou may select elements from any positions; they do not need to be consecutive.\n\nEach element can be removed only once.\n\nThe exponent p may differ between operations and may exceed the largest exponent in the input.\n\nReturn the minimum number of operations needed to remove all elements.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "For this exercise, assume 1 <= arr.length <= 10^5 .\nFor this exercise, assume 0 <= arr[i] <= 10^6 .\nEvery element is an integer exponent, and the input order imposes no restriction on a removal group.",
    "examples": [
      {
        "input": "arr\n=\n[0,0,1,2]\nreturn\n=\n1",
        "output": "1",
        "explanation": "Remove all four elements together: 2^0 + 2^0 + 2^1 + 2^2 = 1 + 1 + 2 + 4 = 8 = 2^3 . A nonempty array needs at least one operation, so the minimum is 1 ."
      },
      {
        "input": "arr\n=\n[0,2,2]\nreturn\n=\n2",
        "output": "2",
        "explanation": "Remove the two elements with exponent 2 together, since 4 + 4 = 8 . Then remove the element with exponent 0 . One operation is impossible because the total 9 is not a power of two, so the minimum is 2 ."
      },
      {
        "input": "arr\n=\n[0,1,4]\nreturn\n=\n3",
        "output": "3",
        "explanation": "The represented values are 1 , 2 , and 16 . No group containing two or more of them sums to a power of two, so each must be removed separately."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[0,0,1,2]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "arr\n=\n[0,2,2]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "arr\n=\n[0,1,4]",
        "expected": "3",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-003",
    "title": "Repair Event Listing Filters, Pagination, and Cache Invalidation",
    "difficulty": "AI project",
    "topics": [
      "Api Design",
      "Cache",
      "Pagination",
      "Filters"
    ],
    "acceptance": "45.0%",
    "frequency": "Medium",
    "lastReported": "2026-10-11",
    "reports": 4,
    "problemSource": "https://www.fastprep.io/project-coding/ibm-repair-event-listing-cache",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 4,
    "statement": "Repair an event-listing backend so filters and normalized pagination reach the repository, responses include complete page metadata, cached reads are reused, and event mutations never leave stale listings.",
    "inputFormat": "Project tasks.",
    "outputFormat": "All checks pass.",
    "constraints": "See project spec.",
    "examples": [
      {
        "input": "see description",
        "output": "pass",
        "explanation": "Repair an event-listing backend so filters and normalized pagination reach the repository, responses"
      }
    ],
    "testCases": [
      {
        "input": "see description",
        "expected": "pass",
        "hidden": false
      },
      {
        "input": "see description",
        "expected": "pass",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(input) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(input):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(String input) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string input) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-004",
    "title": "Maximum Compatible Time Windows",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-10-11",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-compatible-time-windows",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given two integer arrays, startTime and endTime , each of length n . Time window i begins at startTime[i] , inclusive, and ends at endTime[i] , exclusive.\n\nSelect as many pairwise non-overlapping time windows as possible and return the maximum number selected. Because each window is half-open, one selected window may end exactly when another selected window begins.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 10^5 .\n1 <= startTime[i], endTime[i] <= 10^9 .\nstartTime[i] < endTime[i] for every time window.",
    "examples": [
      {
        "input": "startTime\n=\n[1,1,2]\nendTime\n=\n[3,2,4]\nreturn\n=\n2",
        "output": "2",
        "explanation": "You may select window 0 by itself, or select windows 1 and 2 . The latter two are compatible because window 1 ends exactly when window 2 begins."
      },
      {
        "input": "startTime\n=\n[1,1,2,3]\nendTime\n=\n[2,3,3,4]\nreturn\n=\n3",
        "output": "3",
        "explanation": "Select windows 0 , 2 , and 3 : [1,2) , [2,3) , and [3,4) ."
      },
      {
        "input": "startTime\n=\n[5,5,5]\nendTime\n=\n[8,7,6]\nreturn\n=\n1",
        "output": "1",
        "explanation": "All three windows overlap, so at most one can be selected."
      }
    ],
    "testCases": [
      {
        "input": "startTime\n=\n[1,1,2]\nendTime\n=\n[3,2,4]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "startTime\n=\n[1,1,2,3]\nendTime\n=\n[2,3,3,4]",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "startTime\n=\n[5,5,5]\nendTime\n=\n[8,7,6]",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(startTime, endTime) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(startTime, endTime):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] startTime, int[] endTime) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& startTime, vector<int>& endTime) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-005",
    "title": "Last Object Exit Time",
    "difficulty": "Medium",
    "topics": [
      "Math",
      "Simulation"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-10-10",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-last-object-exit-time",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Several objects move along a table represented by the line segment from 0 to tableLength . For object i , position[i] is its distinct starting coordinate and velocity[i] is its nonzero signed velocity.\n\nA positive velocity moves an object to the right.\n\nA negative velocity moves an object to the left.\n\nAll objects start moving simultaneously at time 0 .\n\nWhen two objects collide, they instantly exchange velocities.\n\nAn object leaves the table after crossing either boundary.\n\nReturn the ceiling of the time when the final object leaves the table.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "tableLength > 0 .\nposition.length == velocity.length and at least one object is present.\nEvery position[i] is strictly between 0 and tableLength .\nNo two objects have the same starting position.\nEvery velocity[i] is nonzero.\nCollisions occur instantly.",
    "examples": [
      {
        "input": "tableLength\n=\n9\nposition\n=\n[2,4,5]\nvelocity\n=\n[2,-2,4]\nreturn\n=\n4",
        "output": "4",
        "explanation": "Because equal-mass collisions exchange velocities, the set of paths is equivalent to the objects passing through one another. Their independent exit times are 7/2 , 4/2 , and 4/4 seconds. The maximum is 3.5 , whose ceiling is 4 ."
      }
    ],
    "testCases": [
      {
        "input": "tableLength\n=\n9\nposition\n=\n[2,4,5]\nvelocity\n=\n[2,-2,4]",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "tableLength\n=\n9\nposition\n=\n[2,4,5]\nvelocity\n=\n[2,-2,4]",
        "expected": "4",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(tableLength, position, velocity) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(tableLength, position, velocity):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int tableLength, int[] position, int[] velocity) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int tableLength, vector<int>& position, vector<int>& velocity) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-006",
    "title": "Maximum Easy Tasks After Rearranging",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Sorting",
      "Greedy"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-10-10",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-easy-tasks-after-rearranging",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given an integer array taskDifficulty . You may rearrange its elements in any order.\n\nA task is easy when both conditions hold:\n\nIt has an immediate neighbor on its left and on its right, so the first and last positions cannot be easy.\n\nIts difficulty is strictly less than the difficulties of both immediate neighbors.\n\nReturn the maximum possible number of easy tasks after rearranging the array.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= taskDifficulty.length <= 2 * 10^5 .\n1 <= taskDifficulty[i] <= 10^9 .",
    "examples": [
      {
        "input": "taskDifficulty\n=\n[4,5,6,1,2]\nreturn\n=\n2",
        "output": "2",
        "explanation": "One optimal order is [4,1,5,2,6] . The values 1 and 2 are each strictly smaller than both immediate neighbors, so two tasks are easy."
      }
    ],
    "testCases": [
      {
        "input": "taskDifficulty\n=\n[4,5,6,1,2]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "taskDifficulty\n=\n[4,5,6,1,2]",
        "expected": "2",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(taskDifficulty) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(taskDifficulty):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] taskDifficulty) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& taskDifficulty) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-007",
    "title": "Query Type Frequency Window",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hashing",
      "Sliding Window"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-10-08",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-query-type-frequency-window",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "You are given n query logs, where each log entry includes:\n\ntimestamps[i] : the time of the query in seconds (sorted in non-decreasing order)\n\nqueryTypes[i] : the query type recorded at that time\n\nA query type should be included in the result if:\n\nThere exists at least one 600-second window in which that query type appears at least threshold times.\n\nReturn:\n\nAll query types that meet this condition, sorted in increasing (lexicographical) order\n\nAn empty array if none qualify",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 2 * 10^5\n1 <= threshold <= 2 * 10^5\n1 <= length of queryTypes[i] <= 10",
    "examples": [
      {
        "input": "timestamps\n=\n[100, 150, 200, 250, 700]\nqueryTypes\n=\n[\"Q1\", \"Q1\", \"Q1\", \"Q2\", \"Q1\"]\nthreshold\n=\n2\nreturn\n=\n[\"Q1\"]",
        "output": "[\"Q1\"]",
        "explanation": "The table below shows the time window during which the query type appeared at least threshold times, along with its corresponding frequency count: Query Types Frequency Table Time Window Query Type Frequency Count [101, 700] Q1 3 The query type \"Q1\" occurs 3 times between timestamps 101 and 700 , which is within a 600-second window. Since threshold = 2 , \"Q1\" exceeds the required frequency. Hence, the answer is [\"Q1\"] ."
      }
    ],
    "testCases": [
      {
        "input": "timestamps\n=\n[100, 150, 200, 250, 700]\nqueryTypes\n=\n[\"Q1\", \"Q1\", \"Q1\", \"Q2\", \"Q1\"]\nthreshold\n=\n2",
        "expected": "[\"Q1\"]",
        "hidden": false
      },
      {
        "input": "timestamps\n=\n[100, 150, 200, 250, 700]\nqueryTypes\n=\n[\"Q1\", \"Q1\", \"Q1\", \"Q2\", \"Q1\"]\nthreshold\n=\n2",
        "expected": "[\"Q1\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(timestamps, queryTypes, threshold) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(timestamps, queryTypes, threshold):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(int[] timestamps, String[] queryTypes, int threshold) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<int>& timestamps, vector<string>& queryTypes, int threshold) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-008",
    "title": "Spam Text Classification",
    "difficulty": "Easy",
    "topics": [
      "Array",
      "String",
      "Classification"
    ],
    "acceptance": "62.1%",
    "frequency": "Medium",
    "lastReported": "2026-10-08",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-spam-text-classification",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given an array of text messages `texts` and an array of spam keywords `spamWords`, determine if each message is spam or not. A message is considered spam if it contains at least two occurrences of words from `spamWords` (counting duplicate occurrences). Return an array of strings with \"spam\" or \"not_spam\" for each message.",
    "inputFormat": "Input format varies — see examples.",
    "outputFormat": "Output as described.",
    "constraints": "Constraints as per original OA.",
    "examples": [
      {
        "input": "texts\n=\n[\"free lottery ticket win now\", \"hello how are you\", \"win prize win prize\"]\nspamWords\n=\n[\"free\", \"lottery\", \"win\", \"prize\"]",
        "output": "[\"spam\",\"not_spam\",\"spam\"]",
        "explanation": "First text has \"free\", \"lottery\", \"win\" (>=2 spam words). Second text has 0. Third has \"win\", \"prize\", \"win\", \"prize\" (4 words >= 2)."
      },
      {
        "input": "texts\n=\n[\"win gift card\", \"important bank update\"]\nspamWords\n=\n[\"win\", \"lottery\"]",
        "output": "[\"not_spam\",\"not_spam\"]",
        "explanation": "First text has only 1 spam word (\"win\"), so not_spam. Second has 0."
      }
    ],
    "testCases": [
      {
        "input": "texts\n=\n[\"free lottery ticket win now\", \"hello how are you\", \"win prize win prize\"]\nspamWords\n=\n[\"free\", \"lottery\", \"win\", \"prize\"]",
        "expected": "[\"spam\",\"not_spam\",\"spam\"]",
        "hidden": false
      },
      {
        "input": "texts\n=\n[\"win gift card\", \"important bank update\"]\nspamWords\n=\n[\"win\", \"lottery\"]",
        "expected": "[\"not_spam\",\"not_spam\"]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(texts, spamWords) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(texts, spamWords):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] texts, String[] spamWords) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& texts, vector<string>& spamWords) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-009",
    "title": "Get Triplet Count",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hashing",
      "Two Pointers"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-10-08",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-triplet-count",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "The integer array arr gives a stock’s cost on each day. Count the groups of three indices (i, j, k) such that i < j < k and (arr[i] + arr[j] + arr[k]) is divisible by d .\n\nReturn the total number of qualifying triplets. Equal values at different indices represent distinct choices.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "3 <= arr.length <= 2000 .\n-10^9 <= arr[i] <= 10^9 .\n1 <= d <= 10^9 .\nThe answer fits in a signed 32-bit integer.",
    "examples": [
      {
        "input": "arr\n=\n[3, 3, 4, 7, 8]\nd\n=\n5\nreturn\n=\n3",
        "output": "3",
        "explanation": "The triplets whose sum is divisible by d are shown. Triplet with indices - (0, 1, 2), sum = 3+3+4 = 10 Triplet with indices - (0, 2, 4), sum = 3+4+8 = 15 Triplet with indices - (1, 2, 4), sum = 3+4+8 = 15 Hence, the answer is 3."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[3, 3, 4, 7, 8]\nd\n=\n5",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "arr\n=\n[3, 3, 4, 7, 8]\nd\n=\n5",
        "expected": "3",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr, d) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr, d):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr, int d) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr, int d) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-010",
    "title": "Expiring Authentication Token Manager",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Hash Table",
      "System Design"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2026-10-03",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-expiring-authentication-token-manager",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "You are given a token lifetime timeToLive and an ordered array of authentication-manager operations operations .\n\nEach operation is an array of three strings: [type, tokenId, currentTime] . The supported operation types are:\n\nGENERATE : create the unique token tokenId at currentTime . Its expiration time becomes currentTime + timeToLive .\n\nRENEW : if tokenId exists and is unexpired at currentTime , reset its expiration time to currentTime + timeToLive . Otherwise, ignore the operation.\n\nCOUNT : count the tokens that are unexpired at currentTime . For this operation, tokenId is the empty string.\n\nA token is unexpired at time t exactly when its expiration time is strictly greater than t . Therefore, a token is already expired at the instant equal to its expiration time.\n\nReturn one count for every COUNT operation, preserving query order. GENERATE and RENEW operations do not add values to the returned array.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= timeToLive <= 10^8 .\n1 <= operations.length <= 2000 .\nEvery operation contains exactly three strings and uses one of GENERATE , RENEW , or COUNT .\nEvery non-empty tokenId contains from 1 through 10 lowercase English letters.\nEvery token ID used by GENERATE is unique.\nOperation times are decimal integers from 1 through 10^8 and are strictly increasing across the array.",
    "examples": [
      {
        "input": "timeToLive\n=\n5\noperations\n=\n[[\"GENERATE\",\"aaa\",\"1\"],[\"RENEW\",\"aaa\",\"2\"],[\"COUNT\",\"\",\"6\"],[\"GENERATE\",\"bbb\",\"7\"],[\"RENEW\",\"aaa\",\"8\"],[\"RENEW\",\"bbb\",\"10\"],[\"COUNT\",\"\",\"12\"]]\nreturn\n=\n[1,1]",
        "output": "[1,1]",
        "explanation": "Token aaa first expires at time 6 , then renewal at time 2 moves its expiration to 7 , so the count at time 6 is 1 . It is expired by time 8 , so that renewal is ignored. Token bbb is renewed from expiration time 12 to 15 , so the count at time 12 is also 1 ."
      },
      {
        "input": "timeToLive\n=\n3\noperations\n=\n[[\"GENERATE\",\"alpha\",\"1\"],[\"COUNT\",\"\",\"3\"],[\"COUNT\",\"\",\"4\"]]\nreturn\n=\n[1,0]",
        "output": "[1,0]",
        "explanation": "Token alpha expires at time 4 . It is unexpired at time 3 but expired at time 4 ."
      },
      {
        "input": "timeToLive\n=\n4\noperations\n=\n[[\"RENEW\",\"ghost\",\"1\"],[\"GENERATE\",\"x\",\"2\"],[\"GENERATE\",\"y\",\"3\"],[\"RENEW\",\"x\",\"4\"],[\"COUNT\",\"\",\"5\"],[\"COUNT\",\"\",\"7\"],[\"COUNT\",\"\",\"8\"]]\nreturn\n=\n[2,1,0]",
        "output": "[2,1,0]",
        "explanation": "Renewing the missing token ghost has no effect. Renewal moves token x 's expiration to time 8 , while token y expires at time 7 . The three counts are therefore 2 , 1 , and 0 ."
      }
    ],
    "testCases": [
      {
        "input": "timeToLive\n=\n5\noperations\n=\n[[\"GENERATE\",\"aaa\",\"1\"],[\"RENEW\",\"aaa\",\"2\"],[\"COUNT\",\"\",\"6\"],[\"GENERATE\",\"bbb\",\"7\"],[\"RENEW\",\"aaa\",\"8\"],[\"RENEW\",\"bbb\",\"10\"],[\"COUNT\",\"\",\"12\"]]",
        "expected": "[1,1]",
        "hidden": false
      },
      {
        "input": "timeToLive\n=\n3\noperations\n=\n[[\"GENERATE\",\"alpha\",\"1\"],[\"COUNT\",\"\",\"3\"],[\"COUNT\",\"\",\"4\"]]",
        "expected": "[1,0]",
        "hidden": false
      },
      {
        "input": "timeToLive\n=\n4\noperations\n=\n[[\"RENEW\",\"ghost\",\"1\"],[\"GENERATE\",\"x\",\"2\"],[\"GENERATE\",\"y\",\"3\"],[\"RENEW\",\"x\",\"4\"],[\"COUNT\",\"\",\"5\"],[\"COUNT\",\"\",\"7\"],[\"COUNT\",\"\",\"8\"]]",
        "expected": "[2,1,0]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(timeToLive, operations) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(timeToLive, operations):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int timeToLive, String[][] operations) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(int timeToLive, vector<vector<string>>& operations) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-011",
    "title": "Variadic Function Library Matches",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "String",
      "Design"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-09-29",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-variadic-function-library-matches",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "A function library registers functions in order. Function i has name names[i] , declared parameter types parameterTypes[i] , and flag isVariadic[i] .\n\nA non-variadic function matches a query only when its declared types equal the query exactly. A variadic declaration must be non-empty: every declared type before the last is a fixed prefix, and the final declared type accepts zero or more query arguments. Type tokens compare by exact case-sensitive equality.\n\nReturn the names of every matching function in registration order.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "names.length == parameterTypes.length == isVariadic.length .\n0 <= names.length <= 100000 .\nThe total number of declared and query type tokens is at most 300000 .\nNames and type tokens are non-empty ASCII strings of length at most 100 .\nEvery variadic declaration contains at least one type.",
    "examples": [
      {
        "input": "names\n=\n[\"foo\",\"bar\",\"baz\"]\nparameterTypes\n=\n[[\"String\"],[\"String\",\"Integer\"],[\"String\",\"Integer\"]]\nisVariadic\n=\n[false,true,false]\nqueryTypes\n=\n[\"String\"]\nreturn\n=\n[\"foo\",\"bar\"]",
        "output": "[\"foo\",\"bar\"]",
        "explanation": "The variadic final Integer consumes zero arguments, while the fixed two-parameter function does not match."
      },
      {
        "input": "names\n=\n[\"join\",\"pair\"]\nparameterTypes\n=\n[[\"String\",\"String\"],[\"String\",\"String\"]]\nisVariadic\n=\n[true,false]\nqueryTypes\n=\n[\"String\",\"String\",\"String\"]\nreturn\n=\n[\"join\"]",
        "output": "[\"join\"]",
        "explanation": "The final type of join repeats to consume both trailing arguments."
      },
      {
        "input": "names\n=\n[\"sum\"]\nparameterTypes\n=\n[[\"Integer\"]]\nisVariadic\n=\n[true]\nqueryTypes\n=\n[]\nreturn\n=\n[\"sum\"]",
        "output": "[\"sum\"]",
        "explanation": "A declaration consisting only of its variadic type accepts an empty query."
      }
    ],
    "testCases": [
      {
        "input": "names\n=\n[\"foo\",\"bar\",\"baz\"]\nparameterTypes\n=\n[[\"String\"],[\"String\",\"Integer\"],[\"String\",\"Integer\"]]\nisVariadic\n=\n[false,true,false]\nqueryTypes\n=\n[\"String\"]",
        "expected": "[\"foo\",\"bar\"]",
        "hidden": false
      },
      {
        "input": "names\n=\n[\"join\",\"pair\"]\nparameterTypes\n=\n[[\"String\",\"String\"],[\"String\",\"String\"]]\nisVariadic\n=\n[true,false]\nqueryTypes\n=\n[\"String\",\"String\",\"String\"]",
        "expected": "[\"join\"]",
        "hidden": false
      },
      {
        "input": "names\n=\n[\"sum\"]\nparameterTypes\n=\n[[\"Integer\"]]\nisVariadic\n=\n[true]\nqueryTypes\n=\n[]",
        "expected": "[\"sum\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(names, parameterTypes, isVariadic, queryTypes) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(names, parameterTypes, isVariadic, queryTypes):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] names, String[][] parameterTypes, int[] isVariadic, String[] queryTypes) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& names, vector<vector<string>>& parameterTypes, vector<int>& isVariadic, vector<string>& queryTypes) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-012",
    "title": "Count Triplets Within a Value Range",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Sorting",
      "Two Pointers"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-09-29",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-bounded-range-triplet-count",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an integer array values and a nonnegative integer d , count index triplets i < j < k for which the difference between the maximum and minimum selected values is at most d .\n\nReturn the number of qualifying index triplets. Equal values at different indices are distinct choices.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "3 <= values.length <= 200000 .\n-10^9 <= values[i] <= 10^9 .\n0 <= d <= 2 * 10^9 .\nThe answer fits in a signed 64-bit integer.",
    "examples": [
      {
        "input": "values\n=\n[1,2,3,4]\nd\n=\n2\nreturn\n=\n2",
        "output": "2",
        "explanation": "The qualifying value groups use indices for [1,2,3] and [2,3,4] ."
      },
      {
        "input": "values\n=\n[1,1,1,1]\nd\n=\n0\nreturn\n=\n4",
        "output": "4",
        "explanation": "All four choices of three indices have range zero."
      },
      {
        "input": "values\n=\n[1,5,9]\nd\n=\n3\nreturn\n=\n0",
        "output": "0",
        "explanation": "The only triplet has range 8 , which exceeds d ."
      }
    ],
    "testCases": [
      {
        "input": "values\n=\n[1,2,3,4]\nd\n=\n2",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "values\n=\n[1,1,1,1]\nd\n=\n0",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "values\n=\n[1,5,9]\nd\n=\n3",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(values, d) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(values, d):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] values, int d) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& values, int d) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-014",
    "title": "Count Increasing Contiguous Windows",
    "difficulty": "Medium",
    "topics": [
      "String",
      "BFS",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-05-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-increasing-contiguous-windows",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "The integer array yCoordinates gives the y-coordinate at each consecutive integer x-coordinate. Count contiguous windows of exactly k points whose y-coordinates are strictly increasing from left to right.\n\nFor this exercise, assume overlapping windows count separately. A window beginning at start is valid when yCoordinates[i] < yCoordinates[i + 1] for every index from start through start + k - 2 .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= yCoordinates.length <= 10^5 .\n1 <= k <= yCoordinates.length .\n1 <= yCoordinates[i] <= 10^9 .",
    "examples": [
      {
        "input": "yCoordinates\n=\n[6,5,7,8,3,5,6]\nk\n=\n3\nreturn\n=\n2",
        "output": "2",
        "explanation": "The valid windows are [5,7,8] and [3,5,6] ."
      },
      {
        "input": "yCoordinates\n=\n[1,2,3,4]\nk\n=\n3\nreturn\n=\n2",
        "output": "2",
        "explanation": "Both overlapping windows [1,2,3] and [2,3,4] are valid."
      },
      {
        "input": "yCoordinates\n=\n[4,4,5]\nk\n=\n2\nreturn\n=\n1",
        "output": "1",
        "explanation": "Equality is not increasing, so only [4,5] counts."
      }
    ],
    "testCases": [
      {
        "input": "yCoordinates\n=\n[6,5,7,8,3,5,6]\nk\n=\n3",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "yCoordinates\n=\n[1,2,3,4]\nk\n=\n3",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "yCoordinates\n=\n[4,4,5]\nk\n=\n2",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(yCoordinates, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(yCoordinates, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] yCoordinates, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& yCoordinates, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-015",
    "title": "Visible Profiles Count",
    "difficulty": "Hard",
    "topics": [
      "Stack",
      "Hashing",
      "Design"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2025-04-19",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-visible-profiles-count",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "A popular social media platform provides a feature to connect people online. Connections are represented as an undirected graph where a user can see the profiles of those they are connected to.\n\nThere are connection_nodes users numbered 1 to connection_nodes , and connection_edges connections where the pth pair connects nodes connection_from[p] and connection_to[p] . The queries array contains node numbers. Find the number of users whose profiles are visible to query[p] . Report an array of integers where the pth value is the answer to the pth query.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "🐳",
    "examples": [
      {
        "input": "connection_nodes\n=\n7\nconnection_edges\n=\n4\nconnection_from\n=\n[1, 2, 3, 5]\nconnection_to\n=\n[2, 3, 4, 6]\nqueries\n=\n[1, 3, 5, 7]\nreturn\n=\n[4, 4, 2, 1]",
        "output": "[4, 4, 2, 1]",
        "explanation": "For each query, the number of visible profiles is calculated as follows: Query 1: Visible Profiles are [1, 2, 3, 4]. Number of Visible Profiles is 4. Query 3: Visible Profiles are [1, 2, 3, 4]. Number of Visible Profiles is 4. Query 5: Visible Profiles are [5, 6]. Number of Visible Profiles is 2. Query 7: Visible Profiles are []. Number of Visible Profiles is 1 (the user can see their own profile). Therefore, the function returns [4, 4, 2, 1]."
      }
    ],
    "testCases": [
      {
        "input": "connection_nodes\n=\n7\nconnection_edges\n=\n4\nconnection_from\n=\n[1, 2, 3, 5]\nconnection_to\n=\n[2, 3, 4, 6]\nqueries\n=\n[1, 3, 5, 7]",
        "expected": "[4, 4, 2, 1]",
        "hidden": false
      },
      {
        "input": "connection_nodes\n=\n7\nconnection_edges\n=\n4\nconnection_from\n=\n[1, 2, 3, 5]\nconnection_to\n=\n[2, 3, 4, 6]\nqueries\n=\n[1, 3, 5, 7]",
        "expected": "[4, 4, 2, 1]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(connection_nodes, connection_edges, connection_from, connection_to, queries) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(connection_nodes, connection_edges, connection_from, connection_to, queries):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int connection_nodes, int connection_edges, int[] connection_from, int[] connection_to, int[] queries) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(int connection_nodes, int connection_edges, vector<int>& connection_from, vector<int>& connection_to, vector<int>& queries) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-016",
    "title": "Max Index",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hashing",
      "Queue"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-06-22",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-max-index",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "There is an infinite array of integers numbered consecutively from 0. At each step, a pointer can move from index i to index i + j, or remain where it is. The value of i begins at 0. The value of j begins at 1 and at each step, j increments by 1. There is one known index that must be avoided. Determine the highest index that can be reached in a given number of steps.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ steps ≤ 2 x 10 3\nThere are actually more constraints; I will add them once find the reference :)",
    "examples": [
      {
        "input": "steps\n=\n4\nbadIndex\n=\n6\nreturn\n=\n9",
        "output": "9",
        "explanation": "The pointer is limited to 4 steps and should avoid the bad item 6. Scenario 1: In the first step, j starts at 1. Move 1 unit to index 0 + 1 = 1 and j = 2. At step 2, move 2 units to index 1 + 2 = 3, and j = 3. At step 3, do not move. Otherwise, the pointer will move 3 units to the bad item 6. Now j = 4. At step 4, move 4 units to item 3 + 4 = 7. Scenario 2: At step 1, remain at index 0. Now j = 2. At step 2, move 2 units to index 0+2 = 2 and j = 3. At step 3, move 3 units to index 2+3 = 5 and j = 4. At step 4, move 4 units to index 5 + 4 = 9. The maximum index that can be reached is 9."
      }
    ],
    "testCases": [
      {
        "input": "steps\n=\n4\nbadIndex\n=\n6",
        "expected": "9",
        "hidden": false
      },
      {
        "input": "steps\n=\n4\nbadIndex\n=\n6",
        "expected": "9",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(steps, badIndex) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(steps, badIndex):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int steps, int badIndex) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int steps, int badIndex) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-017",
    "title": "Card Packets",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Dynamic Programming",
      "Array"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-01-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-card-packets",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "An e-commerce company specializes in cards with sports figures on them. Each sport has different categories of cards. For instance, there might be more desirable cards with the most popular sports personalities, others with small pieces of a player's jersey attached, and so on. They have a number of each category of card and want to make some number of packets greater than 1 that each contain equal numbers of each type of card. To do this, they will add more cards of each type until each type can be divided equally among some number of packets. Determine the minimum number of additional cards needed to create a number of packets with equal type distribution.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ cardTypes[i] ≤ 500",
    "examples": [
      {
        "input": "cardTypes\n=\n[4, 7, 5, 11, 15]\nreturn\n=\n4",
        "output": "4",
        "explanation": "In order to make 2 matching packets, the following numbers of additional cards must be added: [0, 1, 1, 1, 1]. This sums to 4 additional cards. The numbers of cards are [4, 8, 6, 12, 16] and they can be divided evenly among 2 packets. If 3 packets are created, an additional [2, 2, 1, 1, 0] cards are needed, sum = 6 items. This yields quantities [6, 9, 6, 12, 15]. Any number of packets ≥ 2 can be created, but creating 2 packets requires the minimum number of additional cards."
      },
      {
        "input": "cardTypes\n=\n[3, 8, 7, 6, 4]\nreturn\n=\n2",
        "output": "2",
        "explanation": "For 2 packets add: [1, 0, 1, 0, 0] (2 cards) to get [4, 8, 8, 6, 4]. For 3 add [0, 1, 2, 0, 2] (5 cards) to get [3, 9, 9, 6, 6]. Any number of packets ≥ 2 can be created, but making 2 packets requires the minimum number of additional cards."
      }
    ],
    "testCases": [
      {
        "input": "cardTypes\n=\n[4, 7, 5, 11, 15]",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "cardTypes\n=\n[3, 8, 7, 6, 4]",
        "expected": "2",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(cardTypes) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(cardTypes):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] cardTypes) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& cardTypes) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-019",
    "title": "Minimum Additions To Make Valid Abc String",
    "difficulty": "Medium",
    "topics": [
      "Sliding Window",
      "Array"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-04-27",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-additions-to-make-valid-abc-string",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given a string word containing only 'a' , 'b' , and 'c' , return the minimum number of characters that must be inserted so that the resulting string is valid.\n\nA string is valid when it is formed by concatenating one or more copies of \"abc\" . You may insert a character at any position, but the existing characters must remain in their original order.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= word.length <= 10^5 .\nEvery character in word is 'a' , 'b' , or 'c' .",
    "examples": [
      {
        "input": "word\n=\n\"b\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "Insert 'a' before 'b' and 'c' after it to obtain \"abc\" ."
      },
      {
        "input": "word\n=\n\"aaa\"\nreturn\n=\n6",
        "output": "6",
        "explanation": "Each 'a' starts a separate cycle, so insert 'b' and 'c' after each one to obtain \"abcabcabc\" ."
      },
      {
        "input": "word\n=\n\"abcabc\"\nreturn\n=\n0",
        "output": "0",
        "explanation": "The input already consists of two complete \"abc\" cycles."
      }
    ],
    "testCases": [
      {
        "input": "word\n=\n\"b\"",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "word\n=\n\"aaa\"",
        "expected": "6",
        "hidden": false
      },
      {
        "input": "word\n=\n\"abcabc\"",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(word) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(word):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String word) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string word) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-020",
    "title": "Equalize Team Size",
    "difficulty": "Hard",
    "topics": [
      "Array",
      "Stack"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-08-07",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-equalize-team-size",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "HackerRank is organizing a hackathon for all its employees.\n\nA hackathon is a team event, and there are n teams taking part. The number of employees in the nth team is denoted by teamSize[n] . In order to maintain uniformity, the team size of at most k teams can be reduced. Find the maximum number of teams of equal size that can be formed if team size is reduced optimally.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 2 * 10^5\n1 ≤ teamSize[i] ≤ 10^9\n0 ≤ k ≤ 10^9",
    "examples": [
      {
        "input": "teamSize\n=\n[1, 2, 2, 3, 4]\nk\n=\n2\nreturn\n=\n4",
        "output": "4",
        "explanation": "The team size of the last 2 teams can be reduced to 2, thus teamSize = [1, 2, 2, 2, 2] . The maximum number of teams with equal size is 4."
      }
    ],
    "testCases": [
      {
        "input": "teamSize\n=\n[1, 2, 2, 3, 4]\nk\n=\n2",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "teamSize\n=\n[1, 2, 2, 3, 4]\nk\n=\n2",
        "expected": "4",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(teamSize, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(teamSize, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] teamSize, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& teamSize, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-021",
    "title": "Count Invalid Log Groups",
    "difficulty": "Medium",
    "topics": [
      "Dynamic Programming",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-10-30",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-invalid-log-groups",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given logGroups , a list of log groups. Each group is an ordered list of status strings, and every status is either \"UP\" or \"DOWN\" .\n\nA group is valid only when both rules hold:\n\nIts first status is \"DOWN\" .\n\nEvery pair of adjacent statuses is different, so the statuses alternate between \"DOWN\" and \"UP\" .\n\nAn empty group is invalid because it has no first \"DOWN\" status. A one-status group is valid exactly when that status is \"DOWN\" . If logGroups is empty, return 0 .\n\nReturn the number of invalid groups. Implement countInvalidLogGroups(List<List<String>> logGroups) .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "0 <= logGroups.length <= 10^5 .\n0 <= logGroups[i].length .\nThe total number of statuses across all groups is at most 2 * 10^5 .\nEvery status is exactly \"UP\" or \"DOWN\" .",
    "examples": [
      {
        "input": "logGroups\n=\n[[\"DOWN\",\"UP\",\"DOWN\"],[\"UP\",\"DOWN\"],[\"DOWN\",\"DOWN\",\"UP\"],[\"DOWN\"]]\nreturn\n=\n2",
        "output": "2",
        "explanation": "The second group is invalid because it starts with \"UP\" . The third group is invalid because its first two adjacent statuses are both \"DOWN\" . The first and fourth groups are valid, so the result is 2 ."
      },
      {
        "input": "logGroups\n=\n[[],[\"DOWN\",\"UP\"],[\"UP\"]]\nreturn\n=\n2",
        "output": "2",
        "explanation": "The empty group is invalid, the alternating two-status group is valid, and the singleton \"UP\" group is invalid. Therefore the answer is 2 ."
      },
      {
        "input": "logGroups\n=\n[]\nreturn\n=\n0",
        "output": "0",
        "explanation": "There are no groups to classify, so there are no invalid groups."
      }
    ],
    "testCases": [
      {
        "input": "logGroups\n=\n[[\"DOWN\",\"UP\",\"DOWN\"],[\"UP\",\"DOWN\"],[\"DOWN\",\"DOWN\",\"UP\"],[\"DOWN\"]]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "logGroups\n=\n[[],[\"DOWN\",\"UP\"],[\"UP\"]]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "logGroups\n=\n[]",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(logGroups) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(logGroups):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String[][] logGroups) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<vector<string>>& logGroups) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-023",
    "title": "Request Parser",
    "difficulty": "Hard",
    "topics": [
      "Queue",
      "Math"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-03-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-request-parser",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 2,
    "statement": "The process of initiating an action on a server is done through HTTP requests which are messages sent by the client. The two most commonly used HTTP requests are GET and POST. This task involves validating requests and parsing URL parameters as a comma-separated string. Authentication tokens for both GET and POST requests are sent as a URL parameter named \"token\". For validation of authentication, the tokens must be in a set of valid authentication tokens. In the case of a POST request, a CSRF (cross-site request forgery) token must also be provided. A POST request is considered valid if its authentication token is valid and its CSRF token is an alphanumeric value consisting only of lowercase letters and/or numbers with a minimum length of 8. Once a request is validated, the URL parameters must be parsed as a comma-separated string.\n\nURL parameters are identified by the portion of the URL that comes after a question mark (?). They consist of a key and a value, separated by an equal sign (=). Multiple parameters are separated by an ampersand (&).\n\nImplementation a request parser prototype. Given an array of strings, valid_auth_tokens, representing the valid authentication tokens, and a 2D array of strings, requests, representing the request types and URLs, for each request, return the request status (\"VALID\" or \"INVALID\"). If VALID, include a comma-separated string of parameters, i.e. \"VALID,<param1_key>,<param1_value>,<param2_key>,<param2_value>\".",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "Unknown for now",
    "examples": [
      {
        "input": "validAuthTokens\n=\n[\"ah37j2ha483u\", \"safh34yw0bp5\", \"ba34wyi8t902\"]\nrequests\n=\n[[\"GET\", \"https://example.com/?token=347sd6yk8iu2&name=alex\"], [\"GET\", \"https://example.com/?token=safh34yw0bp5&name=sam\"], [\"POST\", \"https://example.com/?token=safh34yw0bp5&name=alex\"], [\"POST\", \"https://example.com/?token=safh34yw0bp5&csrf=ak2sh32dy&name=chris\"]]\nreturn\n=\n[\"INVALID\", \"VALID,name,sam\", \"INVALID\", \"VALID,name,chris\"]",
        "output": "[\"INVALID\", \"VALID,name,sam\", \"INVALID\", \"VALID,name,chris\"]",
        "explanation": "In the first request, the auth_token = 347sd6yk8iu2, which is not in the list of given tokens, so the request is INVALID. The string to be returned is \"INVALID\". In the second request, the auth_token = safh34yw0bp5, which is in the list of valid tokens, so the request is VALID. The request parameters are - name = sam. The string to be returned is \"VALID,name,sam\". In the third request, the auth_token = safh34yw0bp5, which is in the list of valid tokens, but since the request is a POST request, it must have a valid CSRF token. Since the given request doesn't have a CSRF token, the request is INVALID. The string to be returned is \"INVALID\". In the fourth request, the auth_token = safh34yw0bp5, which is in the list of valid tokens, but since the request is a POST request, it must have a valid CSRF token. CSRF_token = ak2sh32dy. It is an alphanumeric string with length 9 (>=8), so the given request is VALID. The request parameters are - name = chris. The string to be returned is \"VALID,name,chris\"."
      }
    ],
    "testCases": [
      {
        "input": "validAuthTokens\n=\n[\"ah37j2ha483u\", \"safh34yw0bp5\", \"ba34wyi8t902\"]\nrequests\n=\n[[\"GET\", \"https://example.com/?token=347sd6yk8iu2&name=alex\"], [\"GET\", \"https://example.com/?token=safh34yw0bp5&name=sam\"], [\"POST\", \"https://example.com/?token=safh34yw0bp5&name=alex\"], [\"POST\", \"https://example.com/?token=safh34yw0bp5&csrf=ak2sh32dy&name=chris\"]]",
        "expected": "[\"INVALID\", \"VALID,name,sam\", \"INVALID\", \"VALID,name,chris\"]",
        "hidden": false
      },
      {
        "input": "validAuthTokens\n=\n[\"ah37j2ha483u\", \"safh34yw0bp5\", \"ba34wyi8t902\"]\nrequests\n=\n[[\"GET\", \"https://example.com/?token=347sd6yk8iu2&name=alex\"], [\"GET\", \"https://example.com/?token=safh34yw0bp5&name=sam\"], [\"POST\", \"https://example.com/?token=safh34yw0bp5&name=alex\"], [\"POST\", \"https://example.com/?token=safh34yw0bp5&csrf=ak2sh32dy&name=chris\"]]",
        "expected": "[\"INVALID\", \"VALID,name,sam\", \"INVALID\", \"VALID,name,chris\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(validAuthTokens, requests) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(validAuthTokens, requests):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] validAuthTokens, String[][] requests) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& validAuthTokens, vector<vector<string>>& requests) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-025",
    "title": "Count Valid Pairs Under Threshold",
    "difficulty": "Medium",
    "topics": [
      "BFS",
      "Bit Manipulation",
      "Hashing"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-01-02",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-valid-pairs-under-threshold",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given an array of integers `arr` and an integer `threshold`, count the number of index pairs `(i, j)` with `0 <= i < j < arr.length` such that `arr[i] + arr[j] <= threshold`.",
    "inputFormat": "Input format varies — see examples.",
    "outputFormat": "Output as described.",
    "constraints": "Constraints as per original OA.",
    "examples": [
      {
        "input": "arr\n=\n[1, 2, 3, 4, 5]\nthreshold\n=\n5",
        "output": "4",
        "explanation": "Pairs (1,2)=3, (1,3)=4, (1,4)=5, and (2,3)=5 are all <= 5."
      },
      {
        "input": "arr\n=\n[3, 4, 5]\nthreshold\n=\n6",
        "output": "0",
        "explanation": "The minimum sum is 3 + 4 = 7, which exceeds 6."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[1, 2, 3, 4, 5]\nthreshold\n=\n5",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "arr\n=\n[3, 4, 5]\nthreshold\n=\n6",
        "expected": "0",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr, threshold) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr, threshold):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr, int threshold) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr, int threshold) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-026",
    "title": "Maximize Minimum Distance",
    "difficulty": "Medium",
    "topics": [
      "Math",
      "Simulation"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-05-29",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximize-minimum-distance",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given a set of n distinct points on the x-axis, choose k of them such that the minimum distance between any two chosen points is as large as possible. Find this maximum possible minimum distance.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 ≤ n ≤ 10^5\n0 ≤ x[i] ≤ 10^9\n2 ≤ k ≤ n\nAll points are at distinct x-coordinates.",
    "examples": [
      {
        "input": "x\n=\n[1, 4, 2, 9, 8]\nk\n=\n3\nreturn\n=\n3",
        "output": "3",
        "explanation": "In the optimal solution, one of the possible selection of points is {1, 4, 8}. Here, The distance between 1 and 4 = abs(1 - 4) = 3 The distance between 1 and 8 = abs(1 - 8) = 7 The distance between 4 and 8 = abs(4 - 8) = 4 The minimum amongst them is 3, which is the maximum possible."
      }
    ],
    "testCases": [
      {
        "input": "x\n=\n[1, 4, 2, 9, 8]\nk\n=\n3",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "x\n=\n[1, 4, 2, 9, 8]\nk\n=\n3",
        "expected": "3",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(x, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(x, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] x, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& x, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-027",
    "title": "Find Max Distinct Items",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Heap"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-10-25",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-max-distinct-items",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "There is a list of items in the shopping cart, each having a cost associated with it.\n\nThere are n items, the cost of the ith item is i dollars and m items have already been bought represented in the array arr . Currently, there are k dollars, find the maximum number of distinct items one can have in total after purchasing any number of items from that money.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^6\n1 ≤ m ≤ 10^5\n1 ≤ k ≤ 10^9\n1 ≤ a[i] ≤ 10^6",
    "examples": [
      {
        "input": "n\n=\n10\narr\n=\n[1, 3, 8]\nk\n=\n10\nreturn\n=\n5",
        "output": "5",
        "explanation": "Consider n = 10 , m = 3 , k = 10 , arr = [1, 3, 8] . So, the task is to find the maximum number of distinct items which can be purchased out of 10 items with 10 dollars apart from items [1, 3, 8]. At max, 2 items can be purchased apart from the given 3. let's say item 2 and item 5.\n   \nTotal cost = 2 + 5 = 7 which is less than 10.\n   \nLet us consider three items - Item 2, item 4, and Item 5.\n\nTotal cost = 2 + 4 + 5 = 11 which is greater than 10. So, it is not possible.\n\nSo, the answer is 5 (3 already purchased, and 2 purchased just now)."
      },
      {
        "input": "n\n=\n5\narr\n=\n[3, 6]\nk\n=\n8\nreturn\n=\n5",
        "output": "5",
        "explanation": "At max, 3 items can be purchased apart from the given 2, let's say Item - 1, Item - 2, and Item - 4.\n\nTotal cost = 1 + 2 + 4 = 7 which is less than 8.\n\n \nSo, the answer is 5 (2 already purchased, and 3 purchased just now)."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n10\narr\n=\n[1, 3, 8]\nk\n=\n10",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "n\n=\n5\narr\n=\n[3, 6]\nk\n=\n8",
        "expected": "5",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n, arr, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n, arr, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n, int[] arr, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n, vector<int>& arr, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-028",
    "title": "Max Subjects Number",
    "difficulty": "Medium",
    "topics": [
      "BFS",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-02-19",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-max-subjects-number",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "A student is taking a test on n different subjects. For each n th subject they have already answered answered[i] questions and have time to answer a total of q more questions overall. For each n th subject, the number of questions answered has to be at least needed[i] in order to pass. Determine the maximum number of subjects the student can pass if the additional answered questions are optimally distributed among the subjects.\n\nFor example, there are n = 2 subjects and needed = [4, 5] answered questions, respectively, to pass. The student has answered answered = [2, 4] questions in the two subjects so far, and can answer another q = 2 questions in all subjects combined. The best outcome is to answer an additional question in the second subject to pass it, and it is not possible to pass the first subject. The maximum number of subjects that can be passed is 1 .\n\nComplete the function maxSubjectsNumber in the editor below. The function must return an integer that represents the maximum number of subjects that can be passed.\n\nmaxSubjectsNumber has the following parameter(s):\n\nanswered[answered[0],...answered[n-1]] : an array of integers\n\nneeded[needed[0],...needed[n-1]] : an array of integers\n\nq : an integer",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n0 ≤ answered[i], needed[i] ≤ 10^9",
    "examples": [
      {
        "input": "answered\n=\n[24, 27, 0]\nneeded\n=\n[51, 52, 100]\nq\n=\n100\nreturn\n=\n2",
        "output": "2",
        "explanation": "Here answered = [24, 27, 0] and needed = [51, 52, 100] . The additional answers needed to pass the three subjects are [27, 25, 100] . Using 27 + 25 = 52 of the 100 additional answers allows the student to pass the first two subjects. Passing the third subject requires all 100 additional answers, so it is not possible to pass all three subjects. Therefore, the maximum number of subjects that can be passed is 2 ."
      },
      {
        "input": "answered\n=\n[24, 27, 0]\nneeded\n=\n[51, 52, 100]\nq\n=\n200\nreturn\n=\n3",
        "output": "3",
        "explanation": ":)"
      },
      {
        "input": "answered\n=\n[2, 4]\nneeded\n=\n[4, 5]\nq\n=\n1\nreturn\n=\n1",
        "output": "1",
        "explanation": "There are n = 2 subjects and needed = [4, 5] answered questions, respectively, to pass. The student has answered answered = [2, 4] questions in the two subjects so far, and can answer another q = 1 questions in all subjects combined. The best outcome is to answer an additional question in the second subject to pass it, and it is not possible to pass the first subject. The maximum num of subjects that can be passed is 1 :)"
      }
    ],
    "testCases": [
      {
        "input": "answered\n=\n[24, 27, 0]\nneeded\n=\n[51, 52, 100]\nq\n=\n100",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "answered\n=\n[24, 27, 0]\nneeded\n=\n[51, 52, 100]\nq\n=\n200",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "answered\n=\n[2, 4]\nneeded\n=\n[4, 5]\nq\n=\n1",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(answered, needed, q) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(answered, needed, q):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] answered, int[] needed, int q) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& answered, vector<int>& needed, int q) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-029",
    "title": "Maximum Points By Deleting Elements",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-01-01",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-points-by-deleting-elements",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given an integer array elements . Repeat these operations until the array is empty:\n\nSelect a remaining value v .\n\nRemove every occurrence of v and add their sum to your score.\n\nRemove every occurrence of v - 1 and v + 1 without scoring those values.\n\nReturn the maximum score that can be earned.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= elements.length <= 10^5\n1 <= elements[i] <= 10^5",
    "examples": [
      {
        "input": "elements\n=\n[5,6,6,4,11]\nreturn\n=\n27",
        "output": "27",
        "explanation": "Take 11 for 11 points, both copies of 6 for 12 points, and 4 for 4 points, totaling 27 ."
      },
      {
        "input": "elements\n=\n[3,4,2]\nreturn\n=\n6",
        "output": "6",
        "explanation": "Choose 2 and 4 . They do not conflict and contribute 2 + 4 = 6 ."
      }
    ],
    "testCases": [
      {
        "input": "elements\n=\n[5,6,6,4,11]",
        "expected": "27",
        "hidden": false
      },
      {
        "input": "elements\n=\n[3,4,2]",
        "expected": "6",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(elements) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(elements):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] elements) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& elements) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-030",
    "title": "Merge Arrays",
    "difficulty": "Medium",
    "topics": [
      "Hashing",
      "Array",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-07-25",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-merge-arrays",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given two sorted arrays, merge them to form a single, sorted array with all items in non-decreasing order.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 < n <= 10^5\n0 <= a[i], b[i] <= 10^9 where 0 <= i < n",
    "examples": [
      {
        "input": "a\n=\n[1, 2, 3]\nb\n=\n[2, 5, 5]\nreturn\n=\n[1, 2, 2, 3, 5, 5]",
        "output": "[1, 2, 2, 3, 5, 5]",
        "explanation": "Merge the arrays to create array c as follows:\n\n      a[0] < b[0] -> c = [a[0]] = [1]\n      a[1] < b[0] -> c = [a[0], b[0]] = [1, 2]\n      a[1] < b[1] -> c = [a[0], b[0], a[1]] = [1, 2, 2]\n      a[2] < b[1] -> c = [a[0], b[0], a[1], a[2]] = [1, 2, 2, 3]\n      No more elements in a -> c = [a[0], b[0], a[1], a[2], b[1], b[2]] = [1, 2, 2, 3, 5, 5]\n\n      Elements were alternately taken from the arrays in the order given, maintaining precedence."
      }
    ],
    "testCases": [
      {
        "input": "a\n=\n[1, 2, 3]\nb\n=\n[2, 5, 5]",
        "expected": "[1, 2, 2, 3, 5, 5]",
        "hidden": false
      },
      {
        "input": "a\n=\n[1, 2, 3]\nb\n=\n[2, 5, 5]",
        "expected": "[1, 2, 2, 3, 5, 5]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(a, b) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(a, b):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] a, int[] b) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& a, vector<int>& b) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-031",
    "title": "Repair Event Pre-Save Validation",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Project"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-09-28",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/project-coding/ibm-event-presave-validation",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "Complete the Event model hooks so saves reject invalid lifecycle transitions and event dates.",
    "inputFormat": "Project tasks.",
    "outputFormat": "All checks pass.",
    "constraints": "See project spec.",
    "examples": [
      {
        "input": "see description",
        "output": "pass",
        "explanation": "Complete the Event model hooks so saves reject invalid lifecycle transitions and event dates."
      }
    ],
    "testCases": [
      {
        "input": "see description",
        "expected": "pass",
        "hidden": false
      },
      {
        "input": "see description",
        "expected": "pass",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(input) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(input):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(String input) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string input) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-033",
    "title": "Maximum Efficiency",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-11-09",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-efficiency",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "When evaluating a machine learning model, n test cases are provided. Each is associated with an arrivalTime[i] indicating the times each test case was given. The testing environment is activated once for some time, then enters an inactive state. If activated at time t1 and deactivated at time t2 , tests with arrival times between t1 and t2 (inclusive) are executed. The total time the system was active is t2 - t1 .\n\nEfficiency of testing system = number of test cases tested / total time the system was active\n\nDetermine the maximum efficiency when the testing environment selects optimum activation and deactivation times. The active environment must execute at least two test cases during its active period. Return the maximum possible efficiency.\n\nNotes:\n\nExecution time for test cases is practically instantaneous; that is, it takes almost no time.\n\nIf two test cases share the same arrival time, they are evaluated simultaneously.\n\nEfficiency may take negative values.\n\n𓆞༄･ﾟVely much appreciated, spike!𓆝࿐",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "🍅🍅",
    "examples": [
      {
        "input": "n\n=\n5\narrivalTime\n=\n[9, 1, 3, 5, 6]\nreturn\n=\n1",
        "output": "1",
        "explanation": "It is optimal to choose t1 = 5 and t2 = 6 . If the testing environment is active from t = 5 to 6 , the 4th and 5th test cases will be executed. The number of test cases tested = 2 and the time the system was active is 6 - 5 = 1 . The efficiency of the system is 2 - 1 = 1 . Return 1 as the answer."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n5\narrivalTime\n=\n[9, 1, 3, 5, 6]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "n\n=\n5\narrivalTime\n=\n[9, 1, 3, 5, 6]",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n, arrivalTime) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n, arrivalTime):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n, int[] arrivalTime) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n, vector<int>& arrivalTime) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-034",
    "title": "Circles",
    "difficulty": "Hard",
    "topics": [
      "Design",
      "BFS",
      "Heap"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-07-31",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-circles",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Two circles on a Cartesian plane, A and B, are each defined by three descriptors:\n\nx: the x-coordinate of the circle's center\n\ny: the y-coordinate of the circle's center\n\nR: the radius of the circle\n\nCircles A and B will both be centered either on the X-axis (i.e., Y A = 0 and Y B = 0, or on the Y-axis (i.e., X A = 0 and X B = 0), but not both.\n\nA pair of circles (A and B) will have one of the following relationship types:\n\nTouching: they touch each other at a single point\n\nConcentric: they have the same center point\n\nIntersecting: they intersect each other (touching at two points)\n\nDisjoint-Outside: disjoint with one not existing outside of the other\n\nDisjoint-Inside: disjoint with one contained inside the other (but not concentric)",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 5000\n0 ≤ X,Y,R ≤ 5000",
    "examples": [
      {
        "input": "circlePairs\n=\n[\"3 0 10 5 0 3\", \"0 1 4 0 1 5\"]\nreturn\n=\n[\"Disjoint-Inside\", \"Concentric\"]",
        "output": "[\"Disjoint-Inside\", \"Concentric\"]",
        "explanation": "The circles are Disjoint-Inside. Circle A is centered at (3, 0) and extends 10 units along the x-axis from -7 to 13. Circle B is centered at (5, 0) and extends 3 units along the x-axis from 2 to 8. The circles are Concentric. Circle A is centered at (0, 1) and extends 4 units along the y-axis from -3 to 5. Circle B is centered at (0, 1) and extends 5 units along the y-axis from -4 to 6."
      }
    ],
    "testCases": [
      {
        "input": "circlePairs\n=\n[\"3 0 10 5 0 3\", \"0 1 4 0 1 5\"]",
        "expected": "[\"Disjoint-Inside\", \"Concentric\"]",
        "hidden": false
      },
      {
        "input": "circlePairs\n=\n[\"3 0 10 5 0 3\", \"0 1 4 0 1 5\"]",
        "expected": "[\"Disjoint-Inside\", \"Concentric\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(circlePairs) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(circlePairs):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] circlePairs) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& circlePairs) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-035",
    "title": "Find Maximum Even Sum",
    "difficulty": "Medium",
    "topics": [
      "Math",
      "String",
      "Heap"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-11-06",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-maximum-even-sum",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "The goal is to find the maximum possible even sum of values of tags that can be chosen.\n\nNote:\n\nIt is guaranteed that there is at least one tag with an even value.\n\nThe tags can have positive or negative values.\n\nIt can be possible to choose no tags at all.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "🥑🥑",
    "examples": [
      {
        "input": "val\n=\n[2, 3, 6, -5, 10, 1, 1]\nreturn\n=\n22",
        "output": "22",
        "explanation": "The tags [2, 3, 6, 10, 1] sum to 22 which is even and is the maximum possible. Hence, the answer is 22."
      }
    ],
    "testCases": [
      {
        "input": "val\n=\n[2, 3, 6, -5, 10, 1, 1]",
        "expected": "22",
        "hidden": false
      },
      {
        "input": "val\n=\n[2, 3, 6, -5, 10, 1, 1]",
        "expected": "22",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(val) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(val):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] val) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& val) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-037",
    "title": "Find Min Operations",
    "difficulty": "Medium",
    "topics": [
      "Dynamic Programming",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-08-31",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-min-operations",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 2,
    "statement": "A scheduler manages multiple processes with priorities represented by the letters a, b, and c. Its goal is to optimize the schedule to achieve a specific sequence.\n\nThe operations available to the scheduler are as follows:\n\nChoose a process with priority a, b, or c.\n\nInsert the chosen process into the scheduling queue at any position.\n\nDetermine the minimum number of scheduling operations required to ensure that the scheduling queue follows the repeating pattern \"abc\".\n\nComplete the function findMinOperations in the editor below.\n\nfindMinOperations takes the following parameters:\n\nstring s: the scheduling queue\n\nint : the minimum number of operations required to make the queue a concatenation of 'abc' several times\n\n1 ≤ |s| ≤ 10^5\n\ns consists only of characters 'a', 'b', and 'c'.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "",
    "examples": [
      {
        "input": "s\n=\n\"abb\"\nreturn\n=\n3",
        "output": "3",
        "explanation": "Transform the queue to abcabc by inserting two letters c and one letter a. The string \"abcabc\" is the concatenation of \"abc\" two times. The minimum number of scheduling operations required is 3."
      },
      {
        "input": "s\n=\n\"aa\"\nreturn\n=\n4",
        "output": "4",
        "explanation": "Insert 'b' and 'c' after the first and second 'a' to transform the string to abcabc."
      },
      {
        "input": "s\n=\n\"ac\"\nreturn\n=\n1",
        "output": "1",
        "explanation": "Insert 'b' between 'a' and 'c' to transform the string to abc."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"abb\"",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "s\n=\n\"aa\"",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "s\n=\n\"ac\"",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-038",
    "title": "Get Optimal String Length",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Queue"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-03-09",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-optimal-string-length",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "A string is to be constructed using only the characters 'A' and 'B'. Given four integers, countA , countB , maxA , maxB , the constructed \n    string is said to be optimal if:\n\nThere are at most countA 'A' characters, and countB 'B' characters.\n\nEach substring of only 'A's contains at most maxA 'A' characters.\n\nEach substring of only 'B's contains at most maxB 'B' characters.\n\nHackerRank organized fun trivia for its employees where it asked for the maximum possible length \n    of an optimal string that can be constructed satisfying the criteria above. The goal is to find \n    the maximum possible length of an optimal string.\n\nNote:\n\nThere can be multiple optimal strings with the same maximal length.\n\nA substring of a string is a contiguous subsegment of the string.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "0 ≤ countA, countB, maxA, maxB ≤ 106",
    "examples": [
      {
        "input": "countA\n=\n3\ncountB\n=\n5\nmaxA\n=\n1\nmaxB\n=\n1\nreturn\n=\n7",
        "output": "7",
        "explanation": "The maximal length optimal string that can be constructed is 'BABABAB' whose length is 7. Thus, the answer is 7."
      },
      {
        "input": "countA\n=\n2\ncountB\n=\n4\nmaxA\n=\n2\nmaxB\n=\n1\nreturn\n=\n5",
        "output": "5",
        "explanation": "The maximal length optimal string is 'ABABA'."
      }
    ],
    "testCases": [
      {
        "input": "countA\n=\n3\ncountB\n=\n5\nmaxA\n=\n1\nmaxB\n=\n1",
        "expected": "7",
        "hidden": false
      },
      {
        "input": "countA\n=\n2\ncountB\n=\n4\nmaxA\n=\n2\nmaxB\n=\n1",
        "expected": "5",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(countA, countB, maxA, maxB) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(countA, countB, maxA, maxB):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int countA, int countB, int maxA, int maxB) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int countA, int countB, int maxA, int maxB) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-039",
    "title": "Get Minimum Cost",
    "difficulty": "Medium",
    "topics": [
      "Sorting",
      "String"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-01-01",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-minimum-cost",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "In an edge computing environment, required hardware includes edge devices, input peripherals, and bundles that encompass both types. Each resource comes at a cost, with edge devices priced at edgeDeviceCost , peripherals at inputPeripheralCost , and bundles at bundleCost .\n\nThe challenge is to optimize the procurement of resources. The objective is to ensure the provision of the right quantities of edge devices and peripherals, allowing for a degree of flexibility, and accommodating extra equipment. This flexibility is provided to meet the requirements of the environment, which necessitates x edge devices and y peripherals. The primary goal is to minimize costs while simultaneously guaranteeing that the edge computing environment is equipped with all the essential resources. Compute and return the total expenditure.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ edgeDeviceCost, inputPeripheralCost, bundleCost, x, y ≤ 10^9",
    "examples": [
      {
        "input": "edgeDeviceCost\n=\n3\ninputPeripheralCost\n=\n2\nbundleCost\n=\n1\nx\n=\n4\ny\n=\n3\nreturn\n=\n4",
        "output": "4",
        "explanation": "The optimal strategy is to buy 4 bundles for 4 units of money. This provides the environment with 4 edge devices (x ≤ 4) and 4 peripherals (y < 4)."
      },
      {
        "input": "edgeDeviceCost\n=\n1\ninputPeripheralCost\n=\n20\nbundleCost\n=\n5\nx\n=\n9\ny\n=\n1\nreturn\n=\n13",
        "output": "13",
        "explanation": "The optimal strategy is to get 8 edge devices and 1 bundle containing both, resulting in a total cost of 13 units. The environment will have 9 edge devices and 1 peripheral."
      },
      {
        "input": "edgeDeviceCost\n=\n1\ninputPeripheralCost\n=\n2\nbundleCost\n=\n2\nx\n=\n2\ny\n=\n1\nreturn\n=\n3",
        "output": "3",
        "explanation": "The most cost-efficient strategy is to purchase 1 edge device and 1 bundle pack with a total of 1 + 2 = 3 units. Any other approach results in a higher cost. The min total expenditure is 3 units."
      }
    ],
    "testCases": [
      {
        "input": "edgeDeviceCost\n=\n3\ninputPeripheralCost\n=\n2\nbundleCost\n=\n1\nx\n=\n4\ny\n=\n3",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "edgeDeviceCost\n=\n1\ninputPeripheralCost\n=\n20\nbundleCost\n=\n5\nx\n=\n9\ny\n=\n1",
        "expected": "13",
        "hidden": false
      },
      {
        "input": "edgeDeviceCost\n=\n1\ninputPeripheralCost\n=\n2\nbundleCost\n=\n2\nx\n=\n2\ny\n=\n1",
        "expected": "3",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(edgeDeviceCost, inputPeripheralCost, bundleCost, x, y) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(edgeDeviceCost, inputPeripheralCost, bundleCost, x, y):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int edgeDeviceCost, int inputPeripheralCost, int bundleCost, int x, int y) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int edgeDeviceCost, int inputPeripheralCost, int bundleCost, int x, int y) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-040",
    "title": "Count Descending Subarrays",
    "difficulty": "Medium",
    "topics": [
      "Simulation",
      "Stack"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2025-04-14",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-descending-subarrays",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Given an integer array nums , count how many contiguous subarrays of length at least 2 are strictly descending by exactly 1 at every step.\n\nA subarray nums[l..r] is valid if, for every index i with l <= i < r , we have nums[i + 1] = nums[i] - 1 .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "The source thread did not provide explicit numeric bounds.\nnums.length >= 1\nCount only contiguous subarrays whose adjacent values differ by exactly -1 .\nUse a wide enough integer type to store the number of valid subarrays.",
    "examples": [
      {
        "input": "nums\n=\n[7, 6, 5, 5, 4]\nreturn\n=\n4",
        "output": "4",
        "explanation": "The valid subarrays are [7, 6] , [6, 5] , [7, 6, 5] , and [5, 4] ."
      },
      {
        "input": "nums\n=\n[4, 3, 2, 1]\nreturn\n=\n6",
        "output": "6",
        "explanation": "Every subarray of length at least 2 is valid, so the answer is 3 + 2 + 1 = 6 ."
      }
    ],
    "testCases": [
      {
        "input": "nums\n=\n[7, 6, 5, 5, 4]",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "nums\n=\n[4, 3, 2, 1]",
        "expected": "6",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(nums) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(nums):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& nums) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-041",
    "title": "Find Y Value",
    "difficulty": "Medium",
    "topics": [
      "Simulation",
      "Graph",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2026-04-27",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-y-value",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Given a binary number as a string, x (a binary string), return the binary string of the same length, y , that will produce the maximum value when XORed with x . There is a number of bits that may be set in y called maxSet .\n\nThe binary strings will always have bits digits, and leading zeros are fine.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "Unknown for now",
    "examples": [
      {
        "input": "bits\n=\n3\nmaxSet\n=\n1\nx\n=\n\"101\"\nreturn\n=\n\"010\"",
        "output": "\"010\"",
        "explanation": "First, determine all possible bits = 3 digit binary strings with only maxBits = 1 or fewer bits set: 000, 001, 010, 100. These are the potential y values.\n\n\nNow, XOR each of the y values with x = 101 : 000 xor 101 = 101 001 xor 101 = 100 010 xor 101 = 111 100 xor 101 = 001 The third value produces the maximal result, where y = 010 . Return the string '010'."
      }
    ],
    "testCases": [
      {
        "input": "bits\n=\n3\nmaxSet\n=\n1\nx\n=\n\"101\"",
        "expected": "\"010\"",
        "hidden": false
      },
      {
        "input": "bits\n=\n3\nmaxSet\n=\n1\nx\n=\n\"101\"",
        "expected": "\"010\"",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(bits, maxSet, x) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(bits, maxSet, x):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(int bits, int maxSet, String x) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(int bits, int maxSet, string x) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-042",
    "title": "Get Smallest String",
    "difficulty": "Medium",
    "topics": [
      "Math",
      "Sorting",
      "Design"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2025-06-15",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-smallest-string",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Given a string s that consists of lowercase English letters, select exactly one non-empty substring of s and replace each character of it with the previous character of the English alphabet. For example 'b' is converted to 'a', 'c' is converted to 'b'; ..., and 'a' is converted to 'z'.\n\nFind the lexicographically smallest string that can be obtained after performing the above operation exactly once.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ length of s , | s | ≤ 10 5",
    "examples": [
      {
        "input": "s\n=\n\"hackerrank\"\nreturn\n=\n\"gackerrank\"",
        "output": "\"gackerrank\"",
        "explanation": "Select and change only the first character. Return \"gackerrank\", the lexicographically smallest string possible."
      },
      {
        "input": "s\n=\n\"bbcad\"\nreturn\n=\n\"aabad\"",
        "output": "\"aabad\"",
        "explanation": "Change bbc to aab."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"hackerrank\"",
        "expected": "\"gackerrank\"",
        "hidden": false
      },
      {
        "input": "s\n=\n\"bbcad\"",
        "expected": "\"aabad\"",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(s):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string s) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-044",
    "title": "Maximum Number of Overlapping Intervals",
    "difficulty": "Medium",
    "topics": [
      "Math",
      "BFS"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-12-31",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-number-of-overlapping-intervals",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "You are given a collection of intervals representing meeting or task time windows `intervals[i] = [start, end]`. Find the maximum number of intervals that overlap at any single point in time.",
    "inputFormat": "Input format varies — see examples.",
    "outputFormat": "Output as described.",
    "constraints": "Constraints as per original OA.",
    "examples": [
      {
        "input": "intervals\n=\n[[1, 5], [2, 6], [3, 7], [8, 10]]",
        "output": "3",
        "explanation": "Between time 3 and 5, intervals [1,5], [2,6], and [3,7] all overlap."
      },
      {
        "input": "intervals\n=\n[[1, 2], [2, 3], [3, 4]]",
        "output": "1",
        "explanation": "Intervals do not overlap at interior points."
      }
    ],
    "testCases": [
      {
        "input": "intervals\n=\n[[1, 5], [2, 6], [3, 7], [8, 10]]",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "intervals\n=\n[[1, 2], [2, 3], [3, 4]]",
        "expected": "1",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(intervals) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(intervals):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[][] intervals) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<vector<int>>& intervals) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-045",
    "title": "Rover Move",
    "difficulty": "Medium",
    "topics": [
      "Queue",
      "Greedy"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-09-04",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-rover-move",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "A Mars rover is directed to move within a square matrix. It accepts a sequence of commands to move in any of the four directions from each cell: [UP, DOWN, LEFT or RIGHT]. The rover starts from cell 0. and may not move diagonally or outside of the boundary.\n\nEach cell in the matrix has a position equal to:\n\n(row * size) + column\n\nwhere row and column are zero-indexed, size = row length of the matrix.\n\nReturn the final position of the rover after all moves.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 ≤ n ≤ 20\n1 ≤ |cmds| ≤ 20",
    "examples": [
      {
        "input": "n\n=\n4\ncmds\n=\n[\"RIGHT\", \"UP\", \"DOWN\", \"LEFT\", \"DOWN\", \"DOWN\"]\nreturn\n=\n12",
        "output": "12",
        "explanation": "The function returns 12."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n4\ncmds\n=\n[\"RIGHT\", \"UP\", \"DOWN\", \"LEFT\", \"DOWN\", \"DOWN\"]",
        "expected": "12",
        "hidden": false
      },
      {
        "input": "n\n=\n4\ncmds\n=\n[\"RIGHT\", \"UP\", \"DOWN\", \"LEFT\", \"DOWN\", \"DOWN\"]",
        "expected": "12",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n, cmds) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n, cmds):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n, String[] cmds) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n, vector<string>& cmds) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-047",
    "title": "Count Anagram Groups",
    "difficulty": "Medium",
    "topics": [
      "Stack",
      "Two Pointers"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-05-14",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-anagram-groups",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given an array of strings `words`, group the anagrams together and return the total number of distinct anagram groups.",
    "inputFormat": "Input format varies — see examples.",
    "outputFormat": "Output as described.",
    "constraints": "Constraints as per original OA.",
    "examples": [
      {
        "input": "words\n=\n[\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]",
        "output": "3",
        "explanation": "The groups are [\"eat\",\"tea\",\"ate\"], [\"tan\",\"nat\"], and [\"bat\"]."
      },
      {
        "input": "words\n=\n[\"a\"]",
        "output": "1",
        "explanation": "Single word forms 1 group."
      }
    ],
    "testCases": [
      {
        "input": "words\n=\n[\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "words\n=\n[\"a\"]",
        "expected": "1",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(words) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(words):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String[] words) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<string>& words) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-048",
    "title": "Employee Access Expiration",
    "difficulty": "Medium",
    "topics": [
      "Greedy",
      "Array"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-08-29",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-employee-access-expiration",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Each employee has an access duration. An event (employeeId, time) starts or renews that employee's access through time + duration . Access intervals are half-open: an expiration equal to a timestamp is inactive at that timestamp unless a renewal occurs exactly then.\n\nAfter an employee first receives access, every later event for that employee must occur no later than the current expiration. If an event arrives after a gap, that employee becomes permanently invalid and later events cannot restore access.\n\nGiven the employee definitions and a nondecreasing event stream, return how many employees remain valid and active at the timestamp of the final event.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= employeeIds.length = durations.length <= 200000 .\nEmployee identifiers are unique non-empty strings.\n1 <= durations[i] <= 10^9 .\n1 <= eventEmployeeIds.length = eventTimes.length <= 200000 .\nEvery event employee exists in employeeIds , and eventTimes is nondecreasing.\nA renewal at the exact current expiration is continuous; a later renewal permanently invalidates that employee.\nEach expiration fits in a signed 64-bit integer.",
    "examples": [
      {
        "input": "employeeIds\n=\n[\"a\",\"b\"]\ndurations\n=\n[5,2]\neventEmployeeIds\n=\n[\"a\",\"b\",\"a\"]\neventTimes\n=\n[1,3,5]\nreturn\n=\n1",
        "output": "1",
        "explanation": "At time 5 , employee a is active until 10 . Employee b expires exactly at 5 and is inactive."
      },
      {
        "input": "employeeIds\n=\n[\"x\",\"y\"]\ndurations\n=\n[3,10]\neventEmployeeIds\n=\n[\"x\",\"y\"]\neventTimes\n=\n[2,4]\nreturn\n=\n2",
        "output": "2",
        "explanation": "At the final time 4 , the grants expire at 5 and 14 ."
      },
      {
        "input": "employeeIds\n=\n[\"x\"]\ndurations\n=\n[4]\neventEmployeeIds\n=\n[\"x\",\"x\"]\neventTimes\n=\n[1,3]\nreturn\n=\n1",
        "output": "1",
        "explanation": "The second event extends the expiration from 5 to 7 ."
      },
      {
        "input": "employeeIds\n=\n[\"x\"]\ndurations\n=\n[2]\neventEmployeeIds\n=\n[\"x\",\"x\",\"x\"]\neventTimes\n=\n[1,4,5]\nreturn\n=\n0",
        "output": "0",
        "explanation": "The first grant expires at time 3 . The event at time 4 follows a gap, so employee x is permanently invalid and the event at time 5 cannot restore access."
      }
    ],
    "testCases": [
      {
        "input": "employeeIds\n=\n[\"a\",\"b\"]\ndurations\n=\n[5,2]\neventEmployeeIds\n=\n[\"a\",\"b\",\"a\"]\neventTimes\n=\n[1,3,5]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "employeeIds\n=\n[\"x\",\"y\"]\ndurations\n=\n[3,10]\neventEmployeeIds\n=\n[\"x\",\"y\"]\neventTimes\n=\n[2,4]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "employeeIds\n=\n[\"x\"]\ndurations\n=\n[4]\neventEmployeeIds\n=\n[\"x\",\"x\"]\neventTimes\n=\n[1,3]",
        "expected": "1",
        "hidden": true
      },
      {
        "input": "employeeIds\n=\n[\"x\"]\ndurations\n=\n[2]\neventEmployeeIds\n=\n[\"x\",\"x\",\"x\"]\neventTimes\n=\n[1,4,5]",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(employeeIds, durations, eventEmployeeIds, eventTimes) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(employeeIds, durations, eventEmployeeIds, eventTimes):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String[] employeeIds, int[] durations, String[] eventEmployeeIds, int[] eventTimes) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<string>& employeeIds, vector<int>& durations, vector<string>& eventEmployeeIds, vector<int>& eventTimes) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-049",
    "title": "Get Min Time",
    "difficulty": "Medium",
    "topics": [
      "Dynamic Programming",
      "Greedy"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-11-23",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-min-time",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "A Domain Name System (DNS) translates domain names to IP addresses which are then used by browsers to load internet resources. For quicker DNS lookups, browsers store a number of recent DNS queries in a DNS cache. Retrieving data from the cache is often faster than retrieving it from a DNS server. This task aims to simulate DNS resolution and determine the time taken to process different URLs.\n\nAssume that each DNS cache can store a maximum of the cache_size most recent DNS requests, i.e., URL-IP mappings. The cache is initially empty. It takes cache_time units of time to fetch data from the DNS cache, and server_time units of time to fetch data from the DNS server.\n\nGiven a list of URLs visited as an array of strings, urls , determine the minimum time taken to resolve each DNS request.\n\nNote: New DNS requests are dynamically added to the cache, and the cache stores mappings according to the order in which the requests were made.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ cache_size ≤ 10^5\n1 ≤ cache_time, server_time ≤ 10^9\n1 ≤ size of urls[i] ≤ 20",
    "examples": [
      {
        "input": "cache_size\n=\n2\ncache_time\n=\n2\nserver_time\n=\n3\nurls\n=\n[\"www.google.com\", \"www.yahoo.com\",  \"www.google.com\", \"www.yahoo.com\", \"www.coursera.com\"]\nreturn\n=\n[3, 3, 2, 2, 3]",
        "output": "[3, 3, 2, 2, 3]",
        "explanation": ":)"
      },
      {
        "input": "cache_size\n=\n3\ncache_time\n=\n2\nserver_time\n=\n5\nurls\n=\n[\"http://www.hackerrank.com\", \"http://www.google.com\", \"http://www.gmail.com\", \"http://www.yahoo.com\", \"http://www.hackerrank.com\",\"http://www.gmail.com\"]\nreturn\n=\n[5, 5, 5, 5, 5, 2]",
        "output": "[5, 5, 5, 5, 5, 2]",
        "explanation": ":P"
      }
    ],
    "testCases": [
      {
        "input": "cache_size\n=\n2\ncache_time\n=\n2\nserver_time\n=\n3\nurls\n=\n[\"www.google.com\", \"www.yahoo.com\",  \"www.google.com\", \"www.yahoo.com\", \"www.coursera.com\"]",
        "expected": "[3, 3, 2, 2, 3]",
        "hidden": false
      },
      {
        "input": "cache_size\n=\n3\ncache_time\n=\n2\nserver_time\n=\n5\nurls\n=\n[\"http://www.hackerrank.com\", \"http://www.google.com\", \"http://www.gmail.com\", \"http://www.yahoo.com\", \"http://www.hackerrank.com\",\"http://www.gmail.com\"]",
        "expected": "[5, 5, 5, 5, 5, 2]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(cache_size, cache_time, server_time, urls) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(cache_size, cache_time, server_time, urls):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int cache_size, int cache_time, int server_time, String[] urls) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(int cache_size, int cache_time, int server_time, vector<string>& urls) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-050",
    "title": "Longest Balanced Binary Subarray",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Stack"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-07-16",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-longest-balanced-binary-subarray",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "You are given an integer array arr containing only 0 s and 1 s.\n\nReturn the length of the longest contiguous subarray that satisfies both conditions:\n\nThe subarray contains the same number of 0 s and 1 s.\n\nFor every prefix of the subarray, the number of 1 s is greater than or equal to the number of 0 s.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= arr.length <= 2 * 10^5\narr[i] is either 0 or 1 .",
    "examples": [
      {
        "input": "arr\n=\n[1, 0, 1, 1, 0, 0, 1]\nreturn\n=\n6",
        "output": "6",
        "explanation": "The subarray [1,0,1,1,0,0] is balanced and every prefix has at least as many 1 s as 0 s."
      },
      {
        "input": "arr\n=\n[0, 1, 1, 0]\nreturn\n=\n2",
        "output": "2",
        "explanation": "The longest valid subarray is [1,0] . The full array is balanced, but its first prefix starts with more 0 s than 1 s."
      },
      {
        "input": "arr\n=\n[1,0,1,1,0,0,1]\nreturn\n=\n6",
        "output": "6",
        "explanation": "The subarray [1,0,1,1,0,0] is balanced, and every prefix has at least as many 1 s as 0 s."
      },
      {
        "input": "arr\n=\n[0,1,1,0]\nreturn\n=\n2",
        "output": "2",
        "explanation": "The full array is balanced, but its first prefix has more 0 s than 1 s. The longest valid subarray is [1,0] ."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[1, 0, 1, 1, 0, 0, 1]",
        "expected": "6",
        "hidden": false
      },
      {
        "input": "arr\n=\n[0, 1, 1, 0]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "arr\n=\n[1,0,1,1,0,0,1]",
        "expected": "6",
        "hidden": true
      },
      {
        "input": "arr\n=\n[0,1,1,0]",
        "expected": "2",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-051",
    "title": "Minimum Operations To Make Alternating Binary String",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Hashing",
      "String"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-04-15",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-operations-to-make-alternating-binary-string",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given a binary string. Transform it into an alternating binary string using the following operation: select any bit and flip it (change 0 to 1 or 1 to 0).\n\nFind the minimum number of operations required to make the string alternating.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "0 ≤ length of s ≤ 2 * 10^5\ns consists only of characters '0' and '1'",
    "examples": [
      {
        "input": "s\n=\n\"11101\"\nreturn\n=\n1",
        "output": "1",
        "explanation": "Flipping the bit at index 1 (0-based indexing) makes the string \"10101\", which is alternating. So the minimum operations is 1."
      },
      {
        "input": "s\n=\n\"111101\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "Flip the 1st and 3rd characters (1-based indexing) to obtain \"101010\", which is alternating. Thus, the minimum operations is 2."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"11101\"",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "s\n=\n\"111101\"",
        "expected": "2",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-052",
    "title": "Get Minimum Operation Count",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Stack",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2025-12-31",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-minimum-operation-count",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "A string is beautiful if no two adjacent characters are either\n\nthe same, for example 'aa'.\n\nadjacent in the alphabet, for example 'ef'.\n\nThe following operations can be performed on a string, s .\n\nChoose any index i (0 ≤ i < | s |) and change s[i] to any lowercase English letter.\n\nFind the minimum number of operations required to make the string beautiful.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 ≤ | s | ≤ 10^5\nThe string s contains only lowercase English letters.",
    "examples": [
      {
        "input": "s\n=\n\"abdde\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "String s is not beautiful because: 'dd' violates constraint 1, no two adjacent characters are the same. 'ab' and 'de' violate constraint 2, no two adjacent characters are adjacent in the alphabet. The string can be converted into a beautiful string after 2 operations. One solution is below: Choose i=1 and change s[i] to 'z', s becomes \"azdde\". Choose i=3 and change s[i] to 'k', s becomes \"azdke\" which is beautiful. Note: There are many other solutions such as \"ardze\", \"axdke\", etc. It can be shown that 2 is the minimum number of operations required so return 2."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"abdde\"",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "s\n=\n\"abdde\"",
        "expected": "2",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-054",
    "title": "Plus Mult Array",
    "difficulty": "Medium",
    "topics": [
      "Bit Manipulation",
      "Graph",
      "Hashing"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-07-14",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-plus-mult-array",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "Given an integer array A , split its elements by zero-based index into an even-index subsequence A[0], A[2], A[4], ... and an odd-index subsequence A[1], A[3], A[5], ... .\n\nEvaluate each subsequence from left to right. Multiply its first two values, add the third value, multiply by the fourth value, add the fifth value, and continue alternating addition and multiplication. Let R_even be the even-index result modulo 2 , and let R_odd be the odd-index result modulo 2 . Normalize each remainder to either 0 or 1 , including when the evaluated expression is negative.\n\nReturn the array classification according to these rules:\n\nReturn \"ODD\" when R_odd > R_even .\n\nReturn \"EVEN\" when R_even > R_odd .\n\nReturn \"NEUTRAL\" when R_even = R_odd .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "10 ≤ A.length ≤ 10^5\n-10^9 ≤ A[i] ≤ 10^9",
    "examples": [
      {
        "input": "A\n=\n[12,3,5,7,13,12]\nreturn\n=\n\"NEUTRAL\"",
        "output": "\"NEUTRAL\"",
        "explanation": "For the even indices, R_even = (12 × 5 + 13) mod 2 = 73 mod 2 = 1 . For the odd indices, R_odd = (3 × 7 + 12) mod 2 = 33 mod 2 = 1 . The two remainders are equal, so the result is \"NEUTRAL\" ."
      },
      {
        "input": "A\n=\n[0,1,0,1,0,1,0,1,0,1]\nreturn\n=\n\"ODD\"",
        "output": "\"ODD\"",
        "explanation": "The even-index subsequence is [0,0,0,0,0] , whose alternating result is 0 . The odd-index subsequence is [1,1,1,1,1] , whose result is (((1 × 1) + 1) × 1) + 1 = 3 , so R_odd = 1 . Therefore the classification is \"ODD\" ."
      }
    ],
    "testCases": [
      {
        "input": "A\n=\n[12,3,5,7,13,12]",
        "expected": "\"NEUTRAL\"",
        "hidden": false
      },
      {
        "input": "A\n=\n[0,1,0,1,0,1,0,1,0,1]",
        "expected": "\"ODD\"",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(A) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(A):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(int[] A) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(vector<int>& A) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-055",
    "title": "Count Increasing Subsequences Length Three",
    "difficulty": "Medium",
    "topics": [
      "Bit Manipulation",
      "Sliding Window",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-10-24",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-increasing-subsequences-length-three",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an integer array arr of length n , return the number of strictly increasing subsequences of length 3 , modulo 10^9 + 7 .\n\nA subsequence is obtained by deleting zero or more elements without changing the order of the remaining elements. A length- 3 subsequence is strictly increasing when its indices satisfy i < j < k and its values satisfy arr[i] < arr[j] < arr[k] .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 5000\n0 ≤ arr[i] ≤ 10^9",
    "examples": [
      {
        "input": "n\n=\n5\narr\n=\n[1, 2, 3, 4, 1]\nreturn\n=\n4",
        "output": "4",
        "explanation": "The strictly increasing subsequences are [1, 2, 3] , [1, 2, 4] , [1, 3, 4] , and [2, 3, 4] . Therefore, the answer is 4 ."
      },
      {
        "input": "n\n=\n4\narr\n=\n[3, 1, 4, 5]\nreturn\n=\n2",
        "output": "2",
        "explanation": "The two strictly increasing subsequences are [3, 4, 5] and [1, 4, 5] ."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n5\narr\n=\n[1, 2, 3, 4, 1]",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "n\n=\n4\narr\n=\n[3, 1, 4, 5]",
        "expected": "2",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n, arr) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n, arr):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n, int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n, vector<int>& arr) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-056",
    "title": "Get Min Cores",
    "difficulty": "Hard",
    "topics": [
      "Two Pointers",
      "Heap"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2025-10-19",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-min-cores",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Process scheduling algorithms are used by a CPU to optimally schedule the running processes. A core can execute one process at a time, but a CPU may have multiple cores.\n\nThere are n processes where the ith process starts its execution at start[i] and ends at end[i] , both inclusive. Find the minimum number of cores required to execute the processes.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ start[i] ≤ end[i] ≤ 10^9",
    "examples": [
      {
        "input": "start\n=\n[1, 3, 4]\nend\n=\n[3, 5, 6]\nreturn\n=\n2",
        "output": "2",
        "explanation": "If the CPU has only one core, the first process starts at 1 and ends at 3. The second process starts at 3. Since both processes need a processor at 3, they overlap. There must be more than 1 core. If the CPU has two cores, the first process runs on the first core from 1 to 3, the second runs on the second core from 3 to 5, and the third process runs on the first core from 4 to 6. Return 2, the minimum number of cores required."
      }
    ],
    "testCases": [
      {
        "input": "start\n=\n[1, 3, 4]\nend\n=\n[3, 5, 6]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "start\n=\n[1, 3, 4]\nend\n=\n[3, 5, 6]",
        "expected": "2",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(start, end) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(start, end):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] start, int[] end) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& start, vector<int>& end) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-057",
    "title": "Get Minimum Difference",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Two Pointers"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-04-04",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-minimum-difference",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "An anagram is a word whose characters can be rearranged to create another word. Given two strings, determine the minimum number of characters in either string that must be modified to make the two strings anagrams. If it is not possible to make the two strings anagrams, return -1.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "Each string consists of lowercase characters [a-z]\n1 ≤ n ≤ 100\n0 ≤ |a[i]|, |b[i]| ≤ 104\n1 ≤ |a[i]| + |b[i]| ≤ 104",
    "examples": [
      {
        "input": "a\n=\n[\"tea\", \"tea\", \"act\"]\nb\n=\n[\"ate\", \"toe\", \"acts\"]\nreturn\n=\n[0, 1, -1]",
        "output": "[0, 1, -1]",
        "explanation": "Perform the following calculations: a[0] = tea and b[0] = ate are anagrams, so 0 characters need to be modified. a[1] = tea and b[1] = toe are not anagrams. Modify 1 character in either string (o → a or a → o) to make them anagrams. a[2] = act and b[2] = acts are not anagrams and cannot be converted to anagrams because they contain different numbers of characters. The return array is [0, 1, -1]."
      },
      {
        "input": "a\n=\n[\"a\", \"jk\", \"abb\", \"mn\", \"abc\"]\nb\n=\n[\"bb\", \"kj\", \"bbc\", \"op\", \"def\"]\nreturn\n=\n[-1, 0, 1, 2, 3]",
        "output": "[-1, 0, 1, 2, 3]",
        "explanation": "Perform the following n = 5 calculations: Index 0: a and bb cannot be anagrams because they contain different numbers of characters. Index 1: jk and kj are already anagrams because they both contain the same characters at the same frequencies. Index 2: abb and bbc differ by one character. Index 3: mn and op differ by two characters. Index 4: abc and def differ by three characters. After checking each pair of strings, return the array [-1, 0, 1, 2, 3] as the answer."
      }
    ],
    "testCases": [
      {
        "input": "a\n=\n[\"tea\", \"tea\", \"act\"]\nb\n=\n[\"ate\", \"toe\", \"acts\"]",
        "expected": "[0, 1, -1]",
        "hidden": false
      },
      {
        "input": "a\n=\n[\"a\", \"jk\", \"abb\", \"mn\", \"abc\"]\nb\n=\n[\"bb\", \"kj\", \"bbc\", \"op\", \"def\"]",
        "expected": "[-1, 0, 1, 2, 3]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(a, b) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(a, b):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(String[] a, String[] b) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<string>& a, vector<string>& b) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-058",
    "title": "Minimum Insertions To Balance A Parentheses String",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Array",
      "Sliding Window"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-09-16",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-insertions-to-balance-a-parentheses-string",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given a string that consists of left and right parentheses, '(' and ')' , \n    balance the parentheses by inserting parentheses as necessary. Determine the minimum number of \n    characters that must be inserted.\n\nComplete the function minInsertionsToBalance in the editor.\n\nminInsertionsToBalance has the following parameter:\n\nString s : the initial parentheses sequence\n\nint: the minimum number of insertions",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ length of s ≤ 10 5",
    "examples": [
      {
        "input": "s\n=\n\"()))\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "N/A"
      },
      {
        "input": "s\n=\n\"))((\"\nreturn\n=\n4",
        "output": "4",
        "explanation": "The first two closing parentheses have no matching opening parentheses, so two '(' characters must be inserted before them. The final two opening parentheses remain unmatched, so two ')' characters must be inserted after them. Four insertions produce \"(())(())\" , and fewer insertions cannot resolve all four unmatched parentheses."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"()))\"",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "s\n=\n\"))((\"",
        "expected": "4",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-059",
    "title": "Flight Delay Propagation",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Greedy"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-12-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-flight-delay-propagation",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "A network contains flightNodes flights, numbered from 1 through flightNodes . Dependencies are given by the parallel arrays flightFrom and flightTo .\n\nFor every index i , flight flightFrom[i] cannot depart until flight flightTo[i] has landed. Therefore, if flightTo[i] is delayed, flightFrom[i] also becomes delayed. That new delay propagates transitively to every flight that depends on it.\n\nThe array delayed lists the initially delayed flights. Return every flight that is initially delayed or becomes delayed through the dependency network. Include each flight exactly once and return the IDs in ascending order.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 <= flightNodes <= 10^5 .\nflightFrom.length = flightTo.length .\nEvery value in flightFrom , flightTo , and delayed is between 1 and flightNodes , inclusive.\nDependency pairs and initially delayed IDs may be repeated; repetitions do not duplicate an ID in the result.",
    "examples": [
      {
        "input": "flightNodes\n=\n6\nflightFrom\n=\n[2,3,4,5]\nflightTo\n=\n[1,2,2,4]\ndelayed\n=\n[1]\nreturn\n=\n[1,2,3,4,5]",
        "output": "[1,2,3,4,5]",
        "explanation": "Flight 1 delays flight 2 . Flight 2 then delays flights 3 and 4 , and flight 4 delays flight 5 . Flight 6 is unaffected."
      },
      {
        "input": "flightNodes\n=\n5\nflightFrom\n=\n[1,2,3,4]\nflightTo\n=\n[2,3,4,5]\ndelayed\n=\n[5]\nreturn\n=\n[1,2,3,4,5]",
        "output": "[1,2,3,4,5]",
        "explanation": "Flight 5 delays flight 4 , which delays 3 , then 2 , then 1 . The direction follows from flightTo[i] to its dependent flightFrom[i] ."
      },
      {
        "input": "flightNodes\n=\n6\nflightFrom\n=\n[2,2,3,5,6,6]\nflightTo\n=\n[1,1,2,4,5,5]\ndelayed\n=\n[4,4]\nreturn\n=\n[4,5,6]",
        "output": "[4,5,6]",
        "explanation": "The repeated initial ID and repeated dependency pairs have no extra effect. The delay spreads from flight 4 to 5 and then to 6 ."
      }
    ],
    "testCases": [
      {
        "input": "flightNodes\n=\n6\nflightFrom\n=\n[2,3,4,5]\nflightTo\n=\n[1,2,2,4]\ndelayed\n=\n[1]",
        "expected": "[1,2,3,4,5]",
        "hidden": false
      },
      {
        "input": "flightNodes\n=\n5\nflightFrom\n=\n[1,2,3,4]\nflightTo\n=\n[2,3,4,5]\ndelayed\n=\n[5]",
        "expected": "[1,2,3,4,5]",
        "hidden": false
      },
      {
        "input": "flightNodes\n=\n6\nflightFrom\n=\n[2,2,3,5,6,6]\nflightTo\n=\n[1,1,2,4,5,5]\ndelayed\n=\n[4,4]",
        "expected": "[4,5,6]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(flightNodes, flightFrom, flightTo, delayed) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(flightNodes, flightFrom, flightTo, delayed):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int flightNodes, int[] flightFrom, int[] flightTo, int[] delayed) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(int flightNodes, vector<int>& flightFrom, vector<int>& flightTo, vector<int>& delayed) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-060",
    "title": "Count Digit Holes",
    "difficulty": "Medium",
    "topics": [
      "Hashing",
      "Two Pointers",
      "Heap"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-06-11",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-digit-holes",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "Certain decimal digits contain closed loops, or holes, when written:\n\nDigits 0 , 4 , 6 , and 9 each contain one hole.\n\nDigit 8 contains two holes.\n\nDigits 1 , 2 , 3 , 5 , and 7 contain no holes.\n\nGiven an integer number , return the total number of holes across all of its digits.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= number <= 10^9 .",
    "examples": [
      {
        "input": "number\n=\n649578\nreturn\n=\n5",
        "output": "5",
        "explanation": "Digits 6 , 4 , and 9 contribute one hole each, while digit 8 contributes two. The total is 5 ."
      },
      {
        "input": "number\n=\n123\nreturn\n=\n0",
        "output": "0",
        "explanation": "None of the digits 1 , 2 , or 3 contains a hole."
      },
      {
        "input": "number\n=\n1000000000\nreturn\n=\n9",
        "output": "9",
        "explanation": "The leading 1 contributes no holes, and each of the nine zeroes contributes one."
      }
    ],
    "testCases": [
      {
        "input": "number\n=\n649578",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "number\n=\n123",
        "expected": "0",
        "hidden": false
      },
      {
        "input": "number\n=\n1000000000",
        "expected": "9",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(number) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(number):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int number) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-061",
    "title": "Get Latest K Requests",
    "difficulty": "Medium",
    "topics": [
      "Stack",
      "Design"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-08-31",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-latest-k-requests",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given n request ids as an array of strings, requests , and an integer k , after all requests are received, find the k most recent requests. Report the answer in order of most recent to least recent.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "Unknown for now. If you happen to know about it, feel free to lmk. Many thanks in advance! 🥰",
    "examples": [
      {
        "input": "requests\n=\n[\"item1\", \"item2\", \"item3\", \"item1\", \"item3\"]\nk\n=\n3\nreturn\n=\n[\"item3\", \"item1\", \"item2\"]",
        "output": "[\"item3\", \"item1\", \"item2\"]",
        "explanation": "Starting from the right and moving left, collecting distinct requests, there is \"item3\" followed by \"item1\". Skip the second instance of \"item3\" and find \"item2\". The answer is [\"item3\", \"item1\", \"item2\"]."
      }
    ],
    "testCases": [
      {
        "input": "requests\n=\n[\"item1\", \"item2\", \"item3\", \"item1\", \"item3\"]\nk\n=\n3",
        "expected": "[\"item3\", \"item1\", \"item2\"]",
        "hidden": false
      },
      {
        "input": "requests\n=\n[\"item1\", \"item2\", \"item3\", \"item1\", \"item3\"]\nk\n=\n3",
        "expected": "[\"item3\", \"item1\", \"item2\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(requests, k) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(requests, k):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] requests, int k) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& requests, int k) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-062",
    "title": "Minimum Difference",
    "difficulty": "Medium",
    "topics": [
      "String",
      "Stack",
      "Hashing"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-05-25",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-difference",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given a set of distinct measurements taken at different times, find the minimum possible difference between any two measurements. Print all pairs of measurements that have this minimum difference in ascending order, with the pairs' elements ordered ascending. e.g., if a < b, the pair is a b. The values should have a single space between them.\n\nComplete the function minimumDifference in the editor.\n\nminimumDifference has the following parameter:\n\nint measurements[n] : an array of integers\n\nNONE\n\n(NOTE: NONE is specified by the orignal source. BUT, we wouldnt be able to upload the question if it returns nothing, so we made it return a 2D int arr instead :) 🥑 By spike, Dec 2024 🍉\n\nPrints\n\nPrint the distinct pairs of measurements that have the minimum absolute difference, displayed in ascending order, with each pair separated by one space on a single line\n\n🦥 Thank spike for the 1011st time! 💝",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 ≤ n ≤ 10^5\n-10^9 ≤ measurements[i] ≤ 10^9",
    "examples": [
      {
        "input": "measurements\n=\n[-1, 3, 6, -5, 0]\nreturn\n=\n[[-1, 0]]",
        "output": "[[-1, 0]]",
        "explanation": "After sorting, the measurements are [-5, -1, 0, 3, 6] . The smallest adjacent difference is 0 - (-1) = 1 , so the only pair with the minimum absolute difference is [-1, 0] ."
      },
      {
        "input": "measurements\n=\n[6, 5, 4, 3, 7]\nreturn\n=\n[[3, 4],[4, 5],[5, 6],[6, 7]]",
        "output": "[[3, 4],[4, 5],[5, 6],[6, 7]]",
        "explanation": "The minimum absolute difference is 1, and the pairs with that difference are (3,4), (4,5), (5,6), and (6,7)."
      },
      {
        "input": "measurements\n=\n[1, 3, 5, 10]\nreturn\n=\n[[1, 3], [3, 5]]",
        "output": "[[1, 3], [3, 5]]",
        "explanation": "The minimum absolute difference between any two elements in the array is 2, and there are two such pairs: (1, 3) and (3, 5)."
      }
    ],
    "testCases": [
      {
        "input": "measurements\n=\n[-1, 3, 6, -5, 0]",
        "expected": "[[-1, 0]]",
        "hidden": false
      },
      {
        "input": "measurements\n=\n[6, 5, 4, 3, 7]",
        "expected": "[[3, 4],[4, 5],[5, 6],[6, 7]]",
        "hidden": false
      },
      {
        "input": "measurements\n=\n[1, 3, 5, 10]",
        "expected": "[[1, 3], [3, 5]]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(measurements) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(measurements):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[][] solve(int[] measurements) {\n        // Write your code here\n        return new int[][]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<vector<int>> solve(vector<int>& measurements) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-063",
    "title": "Maximize Consecutive Xor",
    "difficulty": "Medium",
    "topics": [
      "BFS",
      "Math",
      "Queue"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-01-12",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximize-consecutive-xor",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given an integer n that is divisible by 4 , find an integer x satisfying all of the following:\n\nx >= n .\n\nThe binary representation of x has the same number of bits as the binary representation of n .\n\nThe value v = n XOR (n + 1) XOR ... XOR x is as large as possible.\n\nIf several values of x maximize v , return the smallest such x .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "4 <= n <= 10^12 .\nn is divisible by 4 .",
    "examples": [
      {
        "input": "n\n=\n4\nreturn\n=\n6",
        "output": "6",
        "explanation": "The possible values are 4 , 5 , 6 , and 7 . Their consecutive XOR values are 4 , 1 , 7 , and 0 , respectively. The maximum is reached when x = 6 ."
      },
      {
        "input": "n\n=\n8\nreturn\n=\n14",
        "output": "14",
        "explanation": "The valid values have four binary bits. At x = 14 , the range XOR equals 15 , the largest four-bit value, so 14 is optimal."
      },
      {
        "input": "n\n=\n16\nreturn\n=\n30",
        "output": "30",
        "explanation": "The valid values have five binary bits. Choosing x = 30 makes the range XOR equal 31 , which is the largest possible five-bit value."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n4",
        "expected": "6",
        "hidden": false
      },
      {
        "input": "n\n=\n8",
        "expected": "14",
        "hidden": false
      },
      {
        "input": "n\n=\n16",
        "expected": "30",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-064",
    "title": "Find Missing Integer",
    "difficulty": "Hard",
    "topics": [
      "Hashing",
      "Design",
      "Simulation"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2025-04-25",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-missing-integer",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "In the context of data analysis and machine learning, a dataset containing an array of integers has been provided. Each integer is denoted as arr[i] (0 ≤ i < n). The task in this data-centric domain is to predict the kth smallest positive integer that is not found within the dataset, arr .\n\nNote: The smallest positive integer is 1.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 2 * 10^5\n1 ≤ arr[i] ≤ 10^9\n1 ≤ k ≤ 10^12",
    "examples": [
      {
        "input": "arr\n=\n[1, 4, 7, 3, 4]\nk\n=\n5\nreturn\n=\n9",
        "output": "9",
        "explanation": "The first five missing positive integers are [2, 5, 6, 8, 9] . The 5th smallest positive integer not in the dataset is 9 ."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[1, 4, 7, 3, 4]\nk\n=\n5",
        "expected": "9",
        "hidden": false
      },
      {
        "input": "arr\n=\n[1, 4, 7, 3, 4]\nk\n=\n5",
        "expected": "9",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-065",
    "title": "Min Chairs",
    "difficulty": "Hard",
    "topics": [
      "Graph",
      "Sliding Window"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-03-27",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-min-chairs",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "In this challenge, determine the minimum number of chairs to be purchased to accommodate all workers in a new business workroom. There is no chair at the beginning.\n\nThere will be a string array of simulations. Each simulation is described by a combination of four characters: C , R , U , and L\n\nC - A new employee arrives in the workroom. If there is a chair available, the employee takes it. Otherwise, a new one is purchased.\n\nR - An employee goes to a meeting room, freeing up a chair.\n\nU - An employee arrives from a meeting room. If there is a chair available, the employee takes it. Otherwise, a new one is purchased.\n\nL - An employee leaves the workroom, freeing up a chair.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 100 1 ≤ length of each simulation[i] ≤ 10000",
    "examples": [
      {
        "input": "simulation\n=\n[\"CRUL\"]\nreturn\n=\n[1]",
        "output": "[1]",
        "explanation": "In this case, there is only one simulation, CRUL , represented in the table above. At first, there are 0 chairs. \"C\" : A new employee arrives in the workroom and one chair was purchased. \"R\" : An employee goes to the meeting room, freeing up a chair. \"U\" : An employee arrives from the meeting room, took the chair available. \"L\" : An employee leaves the workroom, freeing up a chair. The minimum number of chairs to be purchased in one chair in this case. Result = [1]."
      }
    ],
    "testCases": [
      {
        "input": "simulation\n=\n[\"CRUL\"]",
        "expected": "[1]",
        "hidden": false
      },
      {
        "input": "simulation\n=\n[\"CRUL\"]",
        "expected": "[1]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(simulation) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(simulation):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(String[] simulation) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<string>& simulation) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-067",
    "title": "Find Length Of Longest Bitonic Subarray",
    "difficulty": "Medium",
    "topics": [
      "Math",
      "Dynamic Programming",
      "BFS"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2025-03-05",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-length-of-longest-bitonic-subarray",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 3,
    "statement": "A bitonic sequence is a sequence of numbers that first increase (non-decreasing) and then decreases (non-increasing). Given an array of integers, find the length of the longest subarray that is bitonic in nature.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ arr[i] ≤ 10^9",
    "examples": [
      {
        "input": "arr\n=\n[10, 8, 9, 15, 12, 6, 7]\nreturn\n=\n5",
        "output": "5",
        "explanation": "[8,9,15,12,6] is the longest bitonic subarray. Return its length, 5."
      },
      {
        "input": "arr\n=\n[5, 1, 2, 1, 4, 5]\nreturn\n=\n3",
        "output": "3",
        "explanation": "[1,2,1]is the longest bitonic subarray. Note that the subarray[1,4,5]is also bitonic in nature and has the same length. It is non-decreasing through[1,4,5]and the non-increasing portion is[5]."
      },
      {
        "input": "arr\n=\n[9, 7, 6, 2, 1]\nreturn\n=\n5",
        "output": "5",
        "explanation": "The non-decreasing subarray is[9]. The non-increasing subarray is the entire array. The entire array has 5 elements."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[10, 8, 9, 15, 12, 6, 7]",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "arr\n=\n[5, 1, 2, 1, 4, 5]",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "arr\n=\n[9, 7, 6, 2, 1]",
        "expected": "5",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-069",
    "title": "Subset A",
    "difficulty": "Medium",
    "topics": [
      "String",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2025-03-24",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-subset-a",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Given an integer array, divide the array into 2 subsets A and B while respecting the following conditions:\n\nThe intersection of A and B is null.\n\nThe union A and B is equal to the original array.\n\nThe number of elements in subset A is minimal.\n\nThe sum of A's elements is greater than the sum of B's elements.\n\nReturn the subset A in increasing order where the sum of A's elements is greater than the sum of B's elements. If more than one subset exists, return the one with the maximal sum.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 105\n1 ≤ arr[i] ≤ 105 (where 0 ≤ i < n )",
    "examples": [
      {
        "input": "arr\n=\n[5, 3, 2, 4, 1, 2]\nreturn\n=\n[4, 5]",
        "output": "[4, 5]",
        "explanation": "The subset of A that satisfies the conditions is [4, 5]: A is minimal (size 2) Sum(A) = (4 + 5) = 9 > Sum(B) = (1 + 2 + 2 + 3) = 8 The intersection of A and B is null and their union is equal to arr. The subset A with the maximal sum is [4, 5]."
      },
      {
        "input": "arr\n=\n[4, 2, 5, 1, 6]\nreturn\n=\n[5, 6]",
        "output": "[5, 6]",
        "explanation": "The subset of A that satisfies the conditions is [5, 6]: A is minimal (size 2) Sum(A) = (5 + 6) = 11 > Sum(B) = (1 + 2 + 4) = 7 Sum(A) = (4 + 6) = 10 > Sum(B) = (1 + 2 + 5) = 8 The intersection of A and B is null and their union is equal to arr. The subset A with the maximal sum is [5, 6]."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[5, 3, 2, 4, 1, 2]",
        "expected": "[4, 5]",
        "hidden": false
      },
      {
        "input": "arr\n=\n[4, 2, 5, 1, 6]",
        "expected": "[5, 6]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(arr):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] arr) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& arr) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-070",
    "title": "Process Execution Time",
    "difficulty": "Medium",
    "topics": [
      "Bit Manipulation",
      "Two Pointers"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-03-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-process-execution-time",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given the inclusive start and end times of multiple processes. Compute the total amount of time during which at least one process is running.\n\nIntervals are inclusive, so a process running from 1 to 5 contributes 5 - 1 + 1 = 5 units of time. Overlapping intervals should be merged before summing their lengths.\n\nReturn the total covered time.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 2 * 10^5\n1 <= start[i] <= end[i] <= 10^9",
    "examples": [
      {
        "input": "start\n=\n[1, 2, 8]\nend\n=\n[5, 6, 10]\nreturn\n=\n9",
        "output": "9",
        "explanation": "The first two processes merge into [1, 6] for 6 units. The third process contributes 3 more units from [8, 10] . Total = 9 ."
      }
    ],
    "testCases": [
      {
        "input": "start\n=\n[1, 2, 8]\nend\n=\n[5, 6, 10]",
        "expected": "9",
        "hidden": false
      },
      {
        "input": "start\n=\n[1, 2, 8]\nend\n=\n[5, 6, 10]",
        "expected": "9",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(start, end) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(start, end):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] start, int[] end) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& start, vector<int>& end) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-071",
    "title": "Get Query Answers",
    "difficulty": "Medium",
    "topics": [
      "Graph",
      "Design",
      "Sliding Window"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-04-26",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-query-answers",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Implement a prototype of a simple cache query handler.\n\nThere are n entries stored in the cache. Each entry is of the form {timestamp, key, value}, where time\n    stamp represents the time at which the entry was stored in the cache entry, and value represents the data\n    value of the entry, an integer represented as string. The keys assigned to the cache entries may not be\n    unique. The cache query handler receives q query requests, where each query is of the form {key, timestamp},\n    where key represents the ID of the query entry to find, and timestamp represents the time the enry was added.\n\nGiven 2 2d arr of strings, cache_entries, and queries, of sizes n X 3 and q X 2 respectively, return an arr of size q with\n    the data values for each query.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ q ≤ 10^5\n1 ≤ int(cache_entries[i][2]) ≤ 10^8\ncache_entries[i][0] represents a valid timestamp in the format hh:mm:ss\nsize(cache_entries[i][0]) = 8\ncache_entries[i][1] is an alphanumeric value consisting only of English letters (a-z, A-Z) and digits (0-9)\nIt is guaranteed that the queried {key, timestamp} pair is present in the cache.\nAt a particular timestamp, there can be no duplicate keys.",
    "examples": [
      {
        "input": "cache_entries\n=\n[[\"01:34:05\", \"l66klkph\", \"352\"], [\"56:38:37\", \"8pvj20oo\", \"107\"], [\"36:17:33\", \"r0v06eec\", \"180\"], [\"20:34:20\", \"e15y6dv4\", \"490\"]]\nqueries\n=\n[[\"e15y6dv4\", \"20:34:20\"], [\"8pvj20oo\", \"56:38:37\"]]\nreturn\n=\n[490, 107]",
        "output": "[490, 107]",
        "explanation": ":)"
      },
      {
        "input": "cache_entries\n=\n[[\"12:30:22\",\"a2er5i80\",\"125\"],[\"09:07:47\",\"ioO9ju56\",\"341\"],[\"01:23:09\",\"a2er5i8O\",\"764\"]]\nqueries\n=\n[[\"a2er5i8O\", \"01:23:09\"], [\"ioO9ju56\", \"09:07:47\"]]\nreturn\n=\n[764, 341]",
        "output": "[764, 341]",
        "explanation": "queries[0] corresponds to the data entry at index 2, with value = \"764\"\n\nqueries[1] corresponds to the data entry at index 1, with value = \"341\"\n\n\n\nReturn [764, 341] :)"
      }
    ],
    "testCases": [
      {
        "input": "cache_entries\n=\n[[\"01:34:05\", \"l66klkph\", \"352\"], [\"56:38:37\", \"8pvj20oo\", \"107\"], [\"36:17:33\", \"r0v06eec\", \"180\"], [\"20:34:20\", \"e15y6dv4\", \"490\"]]\nqueries\n=\n[[\"e15y6dv4\", \"20:34:20\"], [\"8pvj20oo\", \"56:38:37\"]]",
        "expected": "[490, 107]",
        "hidden": false
      },
      {
        "input": "cache_entries\n=\n[[\"12:30:22\",\"a2er5i80\",\"125\"],[\"09:07:47\",\"ioO9ju56\",\"341\"],[\"01:23:09\",\"a2er5i8O\",\"764\"]]\nqueries\n=\n[[\"a2er5i8O\", \"01:23:09\"], [\"ioO9ju56\", \"09:07:47\"]]",
        "expected": "[764, 341]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(cache_entries, queries) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(cache_entries, queries):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(String[][] cache_entries, String[][] queries) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<vector<string>>& cache_entries, vector<vector<string>>& queries) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-073",
    "title": "Minimum Operations To Make All Elements Equal",
    "difficulty": "Medium",
    "topics": [
      "Bit Manipulation",
      "Heap",
      "Stack"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-04-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-operations-to-make-all-elements-equal",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "You are given an array nums consisting of positive integers.\n\nYou are also given an integer array queries of size m . For the i th query, you want to make all of the elements of nums equal to queries[i] . You can perform the following operation on the array any number of times:\n\nIncrease or decrease an element of the array by 1.\n\nReturn an array answer of size m where answer[i] is the minimum number of operations to make all elements of nums equal to queries[i] .\n\nNote that after each query the array is reset to its original state.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "n == nums.length\nm == queries.length\n1 <= n, m <= 10^5\n1 <= nums[i], queries[i] <= 10^9",
    "examples": [
      {
        "input": "nums\n=\n[3,1,6,8]\nqueries\n=\n[1,5]\nreturn\n=\n[14,10]",
        "output": "[14,10]",
        "explanation": "For the first query we can do the following operations: Decrease nums[0] 2 times, so that nums = [1,1,6,8]. Decrease nums[2] 5 times, so that nums = [1,1,1,8]. Decrease nums[3] 7 times, so that nums = [1,1,1,1]. So the total number of operations for the first query is 2 + 5 + 7 = 14. For the second query we can do the following operations: Increase nums[0] 2 times, so that nums = [5,1,6,8]. Increase nums[1] 4 times, so that nums = [5,5,6,8]. Decrease nums[2] 1 time, so that nums = [5,5,5,8]. Decrease nums[3] 3 times, so that nums = [5,5,5,5]. So the total number of operations for the second query is 2 + 4 + 1 + 3 = 10."
      },
      {
        "input": "nums\n=\n[2,9,6,3]\nqueries\n=\n[10]\nreturn\n=\n[20]",
        "output": "[20]",
        "explanation": "We can increase each value in the array to 10. The total number of operations will be 8 + 1 + 4 + 7 = 20."
      }
    ],
    "testCases": [
      {
        "input": "nums\n=\n[3,1,6,8]\nqueries\n=\n[1,5]",
        "expected": "[14,10]",
        "hidden": false
      },
      {
        "input": "nums\n=\n[2,9,6,3]\nqueries\n=\n[10]",
        "expected": "[20]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(nums, queries) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(nums, queries):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] nums, int[] queries) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& nums, vector<int>& queries) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-074",
    "title": "Get Max Traffic Time",
    "difficulty": "Hard",
    "topics": [
      "Math",
      "Greedy"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2025-03-05",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-max-traffic-time",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "There is client/server architecture with n clients and one server. Each client starts its interaction with the server at the second start[i] and stops at the second end[i] . The maximum traffic is defined as the maximum number of concurrent interactions with the server.\n\nFind the earliest time at which the maximum number of clients are interacting with the server.\n\nNote: The endpoint is also included in the interaction.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ start[i] ≤ end[i] ≤ 10^9",
    "examples": [
      {
        "input": "start\n=\n[1, 6, 2, 9]\nend\n=\n[7, 8, 6, 10]\nreturn\n=\n6",
        "output": "6",
        "explanation": "The maximum number of concurrent interactions is 3 which happens first at the 6th second. Return 6."
      },
      {
        "input": "start\n=\n[2, 3, 7, 4, 7]\nend\n=\n[4, 5, 8, 7, 10]\nreturn\n=\n4",
        "output": "4",
        "explanation": "🐈‍⬛"
      }
    ],
    "testCases": [
      {
        "input": "start\n=\n[1, 6, 2, 9]\nend\n=\n[7, 8, 6, 10]",
        "expected": "6",
        "hidden": false
      },
      {
        "input": "start\n=\n[2, 3, 7, 4, 7]\nend\n=\n[4, 5, 8, 7, 10]",
        "expected": "4",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(start, end) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(start, end):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] start, int[] end) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& start, vector<int>& end) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-075",
    "title": "Find Arrangements",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Design"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-06-03",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-find-arrangements",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Anju teaches Physics and Chemistry for P and C number of hours respectively. After teaching a particular subject for more than N number of hours continuously, Anju gets exhausted and needs to switch to another subject.\n\nSo the Principal has decided to schedule the time table for Anju in such a way that she does not teach a given subject for more than N number of hours continuously.\n    The principal being weak in maths asks you to find out the maximum number of possible arrangements of hours in which Anju can teach a given subject for no more than N number of hours continuously.\n\nInput format\n\nFirst line contains T the required number of test cases.\n\nNext T lines contain Three space-separated integers P , C , and N respectively.\n\nOutput format\n\nFor each test case, print the number of arrangements of hours in which Anju has not to teach a given subject for more than N number of hours continuously modulo 10^9+7 .\n\nNote: If no arrangement is possible print 0 .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ T ≤ 100\n1 ≤ P, C, N ≤ 10^3",
    "examples": [
      {
        "input": "P\n=\n1\nC\n=\n1\nN\n=\n2\nreturn\n=\n2",
        "output": "2",
        "explanation": "N/A"
      },
      {
        "input": "P\n=\n1\nC\n=\n2\nN\n=\n1\nreturn\n=\n1",
        "output": "1",
        "explanation": "N/A"
      }
    ],
    "testCases": [
      {
        "input": "P\n=\n1\nC\n=\n1\nN\n=\n2",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "P\n=\n1\nC\n=\n2\nN\n=\n1",
        "expected": "1",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(P, C, N) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(P, C, N):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int P, int C, int N) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int P, int C, int N) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-076",
    "title": "Get Minimum Moves",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Stack",
      "Hashing"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-08-17",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-minimum-moves",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "A shopkeeper sells n items where the price of the j th item is price[j] . To maintain balance, the shopkeeper wishes to adjust the price of items such that the median of prices is exactly k . In one move, the shopkeeper can increase or decrease the price of any item by 1, and the shopkeeper can perform this move any number of times.\n\nFind the minimum number of moves in which the median of prices becomes exactly k .\n\nNote: The index of the median of an array of m sorted elements, where m is odd, is (m+1)/2 . For example, [2, 5, 4, 1, 1, 1, 6] sorted is [1, 1, 1, 2, 4, 5, 6] . Its length is 7 so the median is at index (7 + 1)/2 = 4 using 1-based indexing. The median is 2.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ price[i], k ≤ 10^9\nIt is guaranteed that n is odd.",
    "examples": [
      {
        "input": "price\n=\n[4, 2, 1, 4, 7]\nk\n=\n3\nreturn\n=\n1",
        "output": "1",
        "explanation": "Decrease price[0] by 1, the resulting array is [3, 2, 1, 4, 7] ; on sorting, this becomes [1, 2, 3, 4, 7] whose median equals k = 3 . Thus, in one move, the median becomes 3 and the answer is 1."
      }
    ],
    "testCases": [
      {
        "input": "price\n=\n[4, 2, 1, 4, 7]\nk\n=\n3",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "price\n=\n[4, 2, 1, 4, 7]\nk\n=\n3",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(price, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(price, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] price, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& price, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-077",
    "title": "Count Similar Pairs",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-09-26",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-similar-pairs",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Two strings are said to be similar if they are composed of the same characters. For example \"abaca\" and \"cba\" are similar since both of them are composed of characters 'a', 'b' and 'c'. However \"abaca\" and \"bcd\" are not similar since they do not share all of the same letters.\n\nGiven an array of strings words of length n , find the number of pairs of strings that are similar.\n\nNote:\n\nEach string is composed of lowercase English characters only.\n\nPairs are considered index-wise, i.e., two equal strings at different indices are counted as separated pairs.\n\nA pair at indices (i, j) is the same as the pair at (j, i) .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\nThe Sum of the lengths of all strings does not exceed 10^6.\nAll strings consist of lowercase English characters only.",
    "examples": [
      {
        "input": "words\n=\n[\"xyz\", \"foo\", \"of\"]\nreturn\n=\n1",
        "output": "1",
        "explanation": "Here, the strings \"foo\" and \"of\" are similar because they are composed of the same characters ['o', 'f']. There are no other similar pairs so the answer is 1."
      }
    ],
    "testCases": [
      {
        "input": "words\n=\n[\"xyz\", \"foo\", \"of\"]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "words\n=\n[\"xyz\", \"foo\", \"of\"]",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(words) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(words):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String[] words) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<string>& words) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-078",
    "title": "Get Total Execution Time",
    "difficulty": "Medium",
    "topics": [
      "Graph",
      "BFS"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-10-09",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-total-execution-time",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "When multiple tasks are executed on a single-threaded CPU, the tasks are scheduled based on the principle of pre-emption. When a higher-priority task arrives in the execution queue, then the lower-priority task is pre-empted, i.e. its execution is paused until the higher-priority task is complete.\n\nThere are n functions to be executed on a single-threaded CPU, with each function having a unique ID between 0 and n - 1 . Given an integer n representing the number of functions to be executed, and an execution log, as an array of strings, logs , of size m , determine the exclusive times of each of the functions. Exclusive time is the sum of execution times for all calls to a function. Any string representing an execution log is of the form {function_id}:{start/end}:{timestamp} , indicating that the function with ID = function_id , either starts or ends at a time identified by the timestamp value.\n\nNote: While calculating the execution time of a function call, both the starting and ending times of the function call have to be included. The log of the form {function_id}:{start}:{timestamp} means that the running function is preempted at the beginning of timestamp timestamp . The log of the form {function_id}:{end}:{timestamp} means that the function function_id is preempted after completing its execution at timestamp second i.e. after timestamp second.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 100\n1 ≤ m ≤ 500\n0 ≤ function_id < n\n0 ≤ timestamp ≤ 10^3\nThe timestamps are given in non-decreasing order.\nNo two starting timestamps and no two ending timestamps are equal.\nEvery function \"start\" call has a corresponding function \"end\" call.",
    "examples": [
      {
        "input": "n\n=\n2\nlogs\n=\n[\"0:start:0\", \"1:start:3\", \"1:end:6\", \"0:end:10\"]\nreturn\n=\n[7, 4]",
        "output": "[7, 4]",
        "explanation": "The execution of functions happens in the following order: Time = [0, 3]: Function ID = 0 executes Time = [3, 6]: Function ID = 1 executes Time = [6, 10]: Function ID = 0 executes Thus the exclusive times for different functions are as follows: Function (ID = 0) = 3 + 4 = 7 Function (ID = 1) = 3 = 4"
      },
      {
        "input": "n\n=\n3\nlogs\n=\n[\"0:start:0\", \"1:start:3\", \"1:end:6\", \"2:start:8\", \"2:end:10\", \"0:end:12\"]\nreturn\n=\n[6, 4, 3]",
        "output": "[6, 4, 3]",
        "explanation": "The execution of functions happens in the following order: Time = [0, 3]: Function ID = 0 executes Time = [3, 6]: Function ID = 1 executes Time = [6, 8]: Function ID = 0 executes Time = [8, 10]: Function ID = 2 executes Time = [11, 12]: Function ID = 0 executes Thus the exclusive times for different functions are as follows: Function (ID = 0) = 3 + 1 + 2 = 6 Function (ID = 1) = 4 = 4 Function (ID = 2) = 3 So the answer to be returned is [6, 4, 3]."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n2\nlogs\n=\n[\"0:start:0\", \"1:start:3\", \"1:end:6\", \"0:end:10\"]",
        "expected": "[7, 4]",
        "hidden": false
      },
      {
        "input": "n\n=\n3\nlogs\n=\n[\"0:start:0\", \"1:start:3\", \"1:end:6\", \"2:start:8\", \"2:end:10\", \"0:end:12\"]",
        "expected": "[6, 4, 3]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n, logs) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(n, logs):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int n, String[] logs) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(int n, vector<string>& logs) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-079",
    "title": "Count Paginated Medical Records In Range",
    "difficulty": "Medium",
    "topics": [
      "Bit Manipulation",
      "Stack",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-07-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-paginated-medical-records-in-range",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "A medical-records API returns a paginated response. For this network-free practice version, pages[i] contains the integer values of the requested record field returned on API page i + 1 .\n\nA record qualifies when its field value lies in the inclusive interval from lowerBound through upperBound .\n\nReturn the total number of qualifying records across every page.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "pages and any of its rows may be empty.\nEvery field value, lowerBound , and upperBound fits in a signed 32-bit integer.\nlowerBound ≤ upperBound .",
    "examples": [
      {
        "input": "pages\n=\n[[110,125,120],[100,115],[]]\nlowerBound\n=\n110\nupperBound\n=\n120\nreturn\n=\n3",
        "output": "3",
        "explanation": "The qualifying values are 110 , 120 , and 115 . Values 125 and 100 fall outside the inclusive interval, and the empty page contributes no records."
      }
    ],
    "testCases": [
      {
        "input": "pages\n=\n[[110,125,120],[100,115],[]]\nlowerBound\n=\n110\nupperBound\n=\n120",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "pages\n=\n[[110,125,120],[100,115],[]]\nlowerBound\n=\n110\nupperBound\n=\n120",
        "expected": "3",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(pages, lowerBound, upperBound) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(pages, lowerBound, upperBound):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[][] pages, int lowerBound, int upperBound) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<vector<int>>& pages, int lowerBound, int upperBound) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-081",
    "title": "Max Profit",
    "difficulty": "Medium",
    "topics": [
      "Simulation",
      "Sliding Window",
      "Greedy"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-04-25",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-max-profit",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "Find the maximum profit that can be generated for the given amount of money. As the answer can be rather large, report the answer as maxProfit % (10 ^ 9 + 7) where % denotes modulo operator.\n\nComplete the function maxProfit in the editor.\n\nmaxProfit has the following parameters:\n\nint[] cost : an array of integers representing the cost of each item\n\nint x : the initial amount of money Walker has\n\nint : the maximum profit that can be obtained modulo (10^9+7)",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 10^5\n1 <= cost[i] <= 10^5\n0 <= x <= 10^9",
    "examples": [
      {
        "input": "cost\n=\n[3, 4, 1]\nx\n=\n8\nreturn\n=\n7",
        "output": "7",
        "explanation": ":)"
      },
      {
        "input": "cost\n=\n[19, 78, 27, 15, 20]\nx\n=\n25\nreturn\n=\n16",
        "output": "16",
        "explanation": "Walker can afford item 4, whose cost is 20 and whose profit is 2^4 = 16 . After buying it, only 5 remains, so none of items 0 through 3 can also be purchased. Any combination that excludes item 4 has profit at most 2^0 + 2^1 + 2^2 + 2^3 = 15 . Therefore, the maximum profit is 16 ."
      },
      {
        "input": "cost\n=\n[10, 20, 14, 40, 50]\nx\n=\n70\nreturn\n=\n20",
        "output": "20",
        "explanation": "Some possible combination of items Walker can buy are: She can buy items 0, 1, and 2 for a cost of 44 and obtain a profit of 2 ^ 0 + 2 ^ 1 + 2 ^ 2 = 7. She can buy items 0 and 4 for a cost of 60 and obtain a profit of 2 ^ 0 + 2 ^ 4 = 17. She can buy items 1 and 4 for a cost of 70 and obtain a profit of 2 ^ 1 + 2 ^ 4 = 18. She can buy items 2 and 4 for a cost of 64 and obtain a profit of 2 ^ 2 + 2 ^ 4 = 20. Out of all the possible combinations, the maximum profit obtained is by buying items 2 and 4 for a cost of 64 to obtain a profit of 20."
      }
    ],
    "testCases": [
      {
        "input": "cost\n=\n[3, 4, 1]\nx\n=\n8",
        "expected": "7",
        "hidden": false
      },
      {
        "input": "cost\n=\n[19, 78, 27, 15, 20]\nx\n=\n25",
        "expected": "16",
        "hidden": false
      },
      {
        "input": "cost\n=\n[10, 20, 14, 40, 50]\nx\n=\n70",
        "expected": "20",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(cost, x) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(cost, x):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] cost, int x) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& cost, int x) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-082",
    "title": "Is Convertible Data",
    "difficulty": "Medium",
    "topics": [
      "Greedy",
      "Stack"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-08-17",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-is-convertible-data",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 2,
    "statement": "Given a dataset of strings containing only parentheses, characters '(' and ')', the data represented by the string is valid if it is a balanced bracket sequence. One adjustment to the string can be made: at most one bracket can be moved from its original place to any other position in the string. The task is to determine whether, for each string, it is possible to balanced the bracket sequence in 1 move or less. Return an array of the size of the dataset, where the j^th integer is 1 if the string can be converted into a balanced string, and 0 otherwise.\n\nNote: A string s is a balanced bracket sequence if:\n\ns is empty.\n\ns is equal to \"(t)\", where t is a balanced bracket sequence.\n\ns is equal to t_1t_2, i.e. concatenation of t_1 and t_2 where t_1 and t_2 are balanced bracket sequences.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 2 * 10^5\n1 ≤ |dataset[i]| ≤ 2 * 10^5\nn ≤ Σ|dataset[i]| ≤ 2 * 10^5\nIt is guaranteed that each string dataset[i] consists of characters '(' and ')' only",
    "examples": [
      {
        "input": "dataset\n=\n[\")(\", \"(()\", \"()\"]\nreturn\n=\n[1, 0, 1]",
        "output": "[1, 0, 1]",
        "explanation": "For the first string \")(\", applying the operation to move the first bracket to the end results in \"()\", which is a balanced bracket sequence.\n      \nFor the second string \"(()\", it is impossible to convert it into a balanced bracket sequence.\n      \nFor the third string \"()\", it is already a balanced bracket sequence.\n      \nHence, the answer is [1, 0, 1]."
      }
    ],
    "testCases": [
      {
        "input": "dataset\n=\n[\")(\", \"(()\", \"()\"]",
        "expected": "[1, 0, 1]",
        "hidden": false
      },
      {
        "input": "dataset\n=\n[\")(\", \"(()\", \"()\"]",
        "expected": "[1, 0, 1]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(dataset) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(dataset):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(String[] dataset) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<string>& dataset) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-083",
    "title": "Increasing Value Triplets Under Threshold",
    "difficulty": "Medium",
    "topics": [
      "Queue",
      "Bit Manipulation"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-04-04",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-increasing-value-triplets-under-threshold",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an array of distinct integers d and a threshold t , return the number of triplets of distinct indices (a, b, c) that satisfy both conditions:\n\nd[a] < d[b] < d[c] .\n\nd[a] + d[b] + d[c] <= t .\n\nThe indices identify three distinct elements. Their original positions do not need to satisfy a < b < c ; the tuple is ordered by the selected values.\n\nUse 64-bit arithmetic for t , each sum, and the returned count.\n\nImplement triplets(long t, int[] d) .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= d.length <= 10^4 .\nAll values in d are distinct.\n0 < d[i] < 10^9 .\n0 < t < 3 * 10^9 .",
    "examples": [
      {
        "input": "t\n=\n8\nd\n=\n[1, 2, 3, 4, 5]\nreturn\n=\n4",
        "output": "4",
        "explanation": "The four valid value triplets are: (1, 2, 3) , whose sum is 6 . (1, 2, 4) , whose sum is 7 . (1, 2, 5) , whose sum is 8 . (1, 3, 4) , whose sum is 8 ."
      },
      {
        "input": "t\n=\n7\nd\n=\n[4, 1, 2]\nreturn\n=\n1",
        "output": "1",
        "explanation": "The selected values (1, 2, 4) have sum 7 . Their original indices are (1, 2, 0) , so they count even though those positions are not increasing."
      },
      {
        "input": "t\n=\n2500000000\nd\n=\n[800000000, 800000001, 800000002]\nreturn\n=\n1",
        "output": "1",
        "explanation": "The only possible triplet sums to 2400000003 , which does not exceed 2500000000 . The threshold is greater than 2^31 - 1 , so it requires a 64-bit type."
      }
    ],
    "testCases": [
      {
        "input": "t\n=\n8\nd\n=\n[1, 2, 3, 4, 5]",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "t\n=\n7\nd\n=\n[4, 1, 2]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "t\n=\n2500000000\nd\n=\n[800000000, 800000001, 800000002]",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(t, d) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(t, d):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int t, int[] d) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int t, vector<int>& d) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-084",
    "title": "Get Min Operations",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-04-13",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-min-operations",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "Implement a function that returns the minimum number of operations needed to ensure the string s (of length n ) contains no segments of exactly m consecutive '0's.\n\nIn one operation, you can do the following:\n\nSelect a contiguous segment of length k and make every bit in this segment '1'.\n\nThe function getMinOperations will take three inputs:\n\nstring s : a string representing s .\n\nint m : an integer representing m .\n\nint k : an integer representing k .\n\nThe function should return an integer representing the minimum number of operations needed.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 2 * 10^5\n1 ≤ m, k ≤ n",
    "examples": [
      {
        "input": "s\n=\n\"000000\"\nm\n=\n3\nk\n=\n2\nreturn\n=\n1",
        "output": "1",
        "explanation": "We can perform an operation on the interval [3, 4] (1-based indexing) to get \"001100\", ensuring no segment of consecutive 0s has a length ≥ 3. Thus, the answer is 1."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"000000\"\nm\n=\n3\nk\n=\n2",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "s\n=\n\"000000\"\nm\n=\n3\nk\n=\n2",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s, m, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s, m, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s, int m, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s, int m, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-085",
    "title": "Max Xor",
    "difficulty": "Easy",
    "topics": [
      "Bit Manipulation",
      "Sliding Window"
    ],
    "acceptance": "62.1%",
    "frequency": "Medium",
    "lastReported": "2026-02-18",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-max-xor",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "For two positive integers, lo and hi , and a limit k , \n    find two integers, a and b , satisfying the following criteria. \n    Return the value of a e b . The • symbol denotes the bitwise XOR operator.\n\nlo <= a < b <= hi\n\nThe value of a e b is maximal for a e b ≤ k .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ lo < hi ≤ 10^4\n1 ≤ k ≤ 10^4",
    "examples": [
      {
        "input": "lo\n=\n3\nhi\n=\n5\nk\n=\n6\nreturn\n=\n6",
        "output": "6",
        "explanation": "The maximal useable XORed value is 6 because it is the maximal value that is less than or equal to the limit k = 6 ."
      }
    ],
    "testCases": [
      {
        "input": "lo\n=\n3\nhi\n=\n5\nk\n=\n6",
        "expected": "6",
        "hidden": false
      },
      {
        "input": "lo\n=\n3\nhi\n=\n5\nk\n=\n6",
        "expected": "6",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(lo, hi, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(lo, hi, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int lo, int hi, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int lo, int hi, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-086",
    "title": "Get Final String",
    "difficulty": "Medium",
    "topics": [
      "Queue",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-08-14",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-final-string",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given a string s with uppercase English letters, remove all occurrences of the string AWS until no more remain. After each removal, the prefix and suffix strings are concatenated. Return the final string. If the final string is empty, return \"-1\" as a string.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ |s| ≤ 10^5\nThe string contains only uppercase English letters.",
    "examples": [
      {
        "input": "s\n=\n\"AWAWSSG\"\nreturn\n=\n\"G\"",
        "output": "\"G\"",
        "explanation": "AWAWSSG -> AWSG AWSG -> G Return the final string, G."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"AWAWSSG\"",
        "expected": "\"G\"",
        "hidden": false
      },
      {
        "input": "s\n=\n\"AWAWSSG\"",
        "expected": "\"G\"",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(s):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string s) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-088",
    "title": "Maximum Profit From Stock Transactions",
    "difficulty": "Hard",
    "topics": [
      "BFS",
      "Hashing"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-08-24",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-profit-from-stock-transactions",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.",
    "inputFormat": "Input format varies — see examples.",
    "outputFormat": "Output as described.",
    "constraints": "Constraints as per original OA.",
    "examples": [
      {
        "input": "prices\n=\n[7, 1, 5, 3, 6, 4]",
        "output": "5",
        "explanation": "Buy on day 2 (price 1) and sell on day 5 (price 6), profit = 6 - 1 = 5."
      },
      {
        "input": "prices\n=\n[7, 6, 4, 3, 1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and the max profit = 0."
      }
    ],
    "testCases": [
      {
        "input": "prices\n=\n[7, 1, 5, 3, 6, 4]",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "prices\n=\n[7, 6, 4, 3, 1]",
        "expected": "0",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(prices) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(prices):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& prices) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-089",
    "title": "Cache Query Handler",
    "difficulty": "Medium",
    "topics": [
      "Graph",
      "Hashing",
      "Bit Manipulation"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-03-03",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-cache-query-handler",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "Implement a prototype of a simple cache query handler.\n\nThere are n data entries stored in the cache. Each entry is of the form [timestamp, key, value] , where timestamp represents the time at which \n    the entry was stored in the cache, key represents the ID assigned to the cache entry, \n    and value represents the data value of the entry, an integer represented as a string. \n    The keys assigned to the cache entries may not be unique. The cache query handler receives query \n    requests, where each query is of the form [key, timestamp] , where key represents the ID of the cache entry to find, and timestamp represents the time the \n    entry was added.\n\nGiven two 2D arrays of strings, cache_entries , and queries , of sizes n x 3 and q x 2 respectively, return an array of size q with the data values for each query.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ q ≤ 10^5\n1 ≤ int(cache_entries[i][2]) ≤ 10^8\ncache_entries[i][0] represents a valid timestamp in the format hh:mm:ss\nsize(cache_entries[i][0]) = 8\ncache_entries[i][1] , is an alphanumeric value, consisting of only lowercase English letters (a-z), and digits (0-9)\nIt is guaranteed that the queried [key, timestamp] pair is present in the cache.\nAt a particular timestamp, there can be no duplicate keys.",
    "examples": [
      {
        "input": "cacheEntries\n=\n[[\"12:30:22\", \"a2er5i80\", \"125\"], [\"09:07:47\", \"i09ju56\", \"341\"], [\"01:23:09\", \"a2er5i80\", \"764\"]]\nqueries\n=\n[[\"a2er5i80\", \"01:23:09\"], [\"i09ju56\", \"09:07:47\"]]\nreturn\n=\n[\"764\", \"341\"]",
        "output": "[\"764\", \"341\"]",
        "explanation": "queries[0] corresponds to the data entry at index 2, with value = \"764\" queries[1] corresponds to the data entry at index 1, with value = \"341\""
      },
      {
        "input": "cacheEntries\n=\n[[\"12:30:22\", \"a2er5i80\", \"125\"], [\"09:07:47\", \"i09ju56\", \"341\"], [\"01:23:09\", \"a2er5i80\", \"764\"]]\nqueries\n=\n[[\"a2er5i80\", \"01:23:09\"], [\"i09ju56\", \"09:07:47\"]]\nreturn\n=\n[\"764\", \"341\"]",
        "output": "[\"764\", \"341\"]",
        "explanation": "queries[0] corresponds to the data entry at index 2, with value = \"764\" queries[1] corresponds to the data entry at index 1, with value = \"341\""
      }
    ],
    "testCases": [
      {
        "input": "cacheEntries\n=\n[[\"12:30:22\", \"a2er5i80\", \"125\"], [\"09:07:47\", \"i09ju56\", \"341\"], [\"01:23:09\", \"a2er5i80\", \"764\"]]\nqueries\n=\n[[\"a2er5i80\", \"01:23:09\"], [\"i09ju56\", \"09:07:47\"]]",
        "expected": "[\"764\", \"341\"]",
        "hidden": false
      },
      {
        "input": "cacheEntries\n=\n[[\"12:30:22\", \"a2er5i80\", \"125\"], [\"09:07:47\", \"i09ju56\", \"341\"], [\"01:23:09\", \"a2er5i80\", \"764\"]]\nqueries\n=\n[[\"a2er5i80\", \"01:23:09\"], [\"i09ju56\", \"09:07:47\"]]",
        "expected": "[\"764\", \"341\"]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(cacheEntries, queries) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(cacheEntries, queries):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[][] cacheEntries, String[][] queries) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<vector<string>>& cacheEntries, vector<vector<string>>& queries) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-090",
    "title": "Meandering Array",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Simulation"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-04-17",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-meandering-array",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 2,
    "statement": "An array of integers is defined as being in meandering order when the first two elements are the respective largest and smallest elements in the array and the subsequent elements alternate between its next largest and next smallest elements. In other words, the elements are in order of [first_largest, first_smallest, second_largest, second_smallest, ...].",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2≤n≤10^5\n-10^6 ≤ unsorted[i] ≤ 10^6\nThe unsorted array may contain duplicate elements.",
    "examples": [
      {
        "input": "unsorted\n=\n[-1, 1, 2, 3, -5]\nreturn\n=\n[3, -5, 2, -1, 1]",
        "output": "[3, -5, 2, -1, 1]",
        "explanation": "The array [-1, 1, 2, 3, -5] sorted normally is [-5, -1, 1, 2, 3]. Sorted in meandering order, it becomes [3, -5, 2, -1, 1]."
      }
    ],
    "testCases": [
      {
        "input": "unsorted\n=\n[-1, 1, 2, 3, -5]",
        "expected": "[3, -5, 2, -1, 1]",
        "hidden": false
      },
      {
        "input": "unsorted\n=\n[-1, 1, 2, 3, -5]",
        "expected": "[3, -5, 2, -1, 1]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(unsorted) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(unsorted):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] unsorted) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& unsorted) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-091",
    "title": "Count Teams",
    "difficulty": "Easy",
    "topics": [
      "Sliding Window",
      "Hashing",
      "Simulation"
    ],
    "acceptance": "62.1%",
    "frequency": "Medium",
    "lastReported": "2026-07-01",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-teams",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 1,
    "statement": "FC Codelona is trying to assemble a team from a roster of available players. They have a minimum number of players they want to sign, and each player needs to have a skill rating within a certain range.\n\nGiven a list of players' skill levels with desired upper and lower bounds, determine how many teams can be created from the list.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "🍇🍇",
    "examples": [
      {
        "input": "skills\n=\n[12, 4, 6, 13, 5, 10]\nminPlayers\n=\n3\nminLevel\n=\n4\nmaxLevel\n=\n10\nreturn\n=\n5",
        "output": "5",
        "explanation": "The list includes players with skill levels [12, 4, 6, 13, 5, 10]. They want to hire at least 3 players with skill levels between 4 and 10, inclusive. Four of the players with the following skill levels {4, 6, 5, 10} meet the criteria. There are 5 ways to form a team of at least 3 players: {4, 5, 6}, {4, 6, 10}, {4, 5, 10}, {5, 6, 10}, and {4, 5, 6, 10}. Return 5."
      }
    ],
    "testCases": [
      {
        "input": "skills\n=\n[12, 4, 6, 13, 5, 10]\nminPlayers\n=\n3\nminLevel\n=\n4\nmaxLevel\n=\n10",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "skills\n=\n[12, 4, 6, 13, 5, 10]\nminPlayers\n=\n3\nminLevel\n=\n4\nmaxLevel\n=\n10",
        "expected": "5",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(skills, minPlayers, minLevel, maxLevel) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(skills, minPlayers, minLevel, maxLevel):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] skills, int minPlayers, int minLevel, int maxLevel) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& skills, int minPlayers, int minLevel, int maxLevel) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-092",
    "title": "Get Minimum Increment",
    "difficulty": "Medium",
    "topics": [
      "Sliding Window",
      "Graph",
      "Design"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-01-29",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-minimum-increment",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an integer array arr of length n , you can perform the following operation on the array at most once:\n\nChoose a subset of elements from the array such that no two selected elements are adjacent (i.e., no two selected elements are next to each other in the array).\n\nChoose a non-negative integer x , and increase all the selected elements by x .\n\nDetermine the minimum non-negative integer x , required to make the array arr non-decreasing using at most one operation. If it is impossible, return -1 .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "",
    "examples": [
      {
        "input": "arr\n=\n[1, 1, 3, 2]\nreturn\n=\n1",
        "output": "1",
        "explanation": "Some of the possible ways are: Select the element with index 3 (0-based indexing) and increment = 1 to get the array arr = [1, 1, 3, 3] . Select the elements with indices [1, 3] (0-based indexing) and increment = 2 to get the array arr = [1, 3, 3, 4] . Hence, the minimum value of increment is 1."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[1, 1, 3, 2]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "arr\n=\n[1, 1, 3, 2]",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-093",
    "title": "Drawing Edge",
    "difficulty": "Easy",
    "topics": [
      "Queue",
      "Simulation"
    ],
    "acceptance": "62.1%",
    "frequency": "Medium",
    "lastReported": "2026-09-09",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-drawing-edge",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given n labeled vertices. For every unordered pair of distinct vertices, you may either draw one undirected edge between them or leave them disconnected.\n\nA graph may be disconnected. Two graphs are different when at least one pair of vertices has a different edge choice.\n\nReturn the number of distinct simple undirected graphs that can be formed, modulo 10^9 + 7 .\n\nComplete drawingEdge with the parameter int n and return the result as an int .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 10^9",
    "examples": [
      {
        "input": "n\n=\n4\nreturn\n=\n64",
        "output": "64",
        "explanation": "Four vertices determine 4 * 3 / 2 = 6 possible edges. Each edge can be absent or present independently, so the number of graphs is 2^6 = 64 ."
      },
      {
        "input": "n\n=\n2\nreturn\n=\n2",
        "output": "2",
        "explanation": "There is one possible edge between the two vertices. It can be absent or present, so there are 2 graphs."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n4",
        "expected": "64",
        "hidden": false
      },
      {
        "input": "n\n=\n2",
        "expected": "2",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(n) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-094",
    "title": "Count Power Products In Range",
    "difficulty": "Medium",
    "topics": [
      "Hashing",
      "Stack",
      "Design"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-04-02",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-power-products-in-range",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "Given two integers low and high , count how many integers in the inclusive range [low, high] can be written in the form 3x * 5y , where x and y are non-negative integers.\n\nEach valid value should be counted once, even if there is only one way to generate it. The value 1 is valid because 1 = 30 * 50 .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "The source thread did not provide explicit numeric bounds.\nx and y are non-negative integers.\nOnly values within the inclusive range [low, high] should be counted.\nImplementations should avoid overflow when generating powers of 3 and 5 .",
    "examples": [
      {
        "input": "low\n=\n1\nhigh\n=\n15\nreturn\n=\n5",
        "output": "5",
        "explanation": "The valid numbers in the range are 1, 3, 5, 9, 15 . Therefore, the answer is 5 ."
      },
      {
        "input": "low\n=\n16\nhigh\n=\n100\nreturn\n=\n5",
        "output": "5",
        "explanation": "The valid numbers in the range are 25, 27, 45, 75, 81 . Therefore, the answer is 5 ."
      }
    ],
    "testCases": [
      {
        "input": "low\n=\n1\nhigh\n=\n15",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "low\n=\n16\nhigh\n=\n100",
        "expected": "5",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(low, high) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(low, high):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int low, int high) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int low, int high) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-095",
    "title": "Table Of Contents",
    "difficulty": "Medium",
    "topics": [
      "Simulation",
      "Greedy",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-09-29",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-table-of-contents",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Create a table of contents for a simple markup language. It must follow two rules:\n\nIf a line starts with a single # followed by a space, then it's a chapter title.\n\nIf a line starts with a double # followed by a space, then it's a section title.\n\nThe table of contents should be displayed in the following format:\n\nNote that each number is followed by a period and the last period is followed by 1 space.\n\nComplete the function tableOfContents in the editor.\n\ntableOfContents has the following parameter:\n\nstring text[n] : the input text\n\nstring[] : each string is a line in the table of contents",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 1000\n1 ≤ length of text[i] ≤ 100\nWhen a line starts with # or with ## , these special characters are always followed by a space.\nThe first line of the text is guaranteed to be a chapter line.",
    "examples": [
      {
        "input": "text\n=\n[\"# Cars\", \"Cars came into global use during the 20th century\", \"Most definitions of car say they run primarily on roads\", \"## Sedan\", \"Sedan's first recorded use as a name for a car body was in 1912\", \"## Coupe\", \"Coupe is a passenger car with a sloping rear roofline and generally two doors\", \"## SUV\", \"The predecessors to SUVs date back to military and low-volume models from the late 1930s\", \"There is no commonly agreed definition of an SUV, and usage varies between countries.\"]\nreturn\n=\n[\"1. Cars\", \"1.1. Sedan\", \"1.2. Coupe\", \"1.3. SUV\"]",
        "output": "[\"1. Cars\", \"1.1. Sedan\", \"1.2. Coupe\", \"1.3. SUV\"]",
        "explanation": "The first line of input indicates there are n = 10 lines of text. There is only 1 chapter in the input, and it contains 3 sections. All the lines that don't begin with # or ## are ignored in the table of contents."
      }
    ],
    "testCases": [
      {
        "input": "text\n=\n[\"# Cars\", \"Cars came into global use during the 20th century\", \"Most definitions of car say they run primarily on roads\", \"## Sedan\", \"Sedan's first recorded use as a name for a car body was in 1912\", \"## Coupe\", \"Coupe is a passenger car with a sloping rear roofline and generally two doors\", \"## SUV\", \"The predecessors to SUVs date back to military and low-volume models from the late 1930s\", \"There is no commonly agreed definition of an SUV, and usage varies between countries.\"]",
        "expected": "[\"1. Cars\", \"1.1. Sedan\", \"1.2. Coupe\", \"1.3. SUV\"]",
        "hidden": false
      },
      {
        "input": "text\n=\n[\"# Cars\", \"Cars came into global use during the 20th century\", \"Most definitions of car say they run primarily on roads\", \"## Sedan\", \"Sedan's first recorded use as a name for a car body was in 1912\", \"## Coupe\", \"Coupe is a passenger car with a sloping rear roofline and generally two doors\", \"## SUV\", \"The predecessors to SUVs date back to military and low-volume models from the late 1930s\", \"There is no commonly agreed definition of an SUV, and usage varies between countries.\"]",
        "expected": "[\"1. Cars\", \"1.1. Sedan\", \"1.2. Coupe\", \"1.3. SUV\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(text) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(text):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] text) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& text) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-096",
    "title": "Alphabetically Smallest Palindrome",
    "difficulty": "Hard",
    "topics": [
      "Sorting",
      "Bit Manipulation",
      "BFS"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2025-11-18",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-alphabetically-smallest-palindrome",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "A palindrome reads the same from either direction; for example, ada is a palindrome. You are given a string s of lowercase English letters.\n\nChange the fewest letters possible so that the characters of s can be rearranged to form a palindrome. If multiple palindromes require the same minimum number of changes, return the alphabetically smallest one.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ s.length ≤ 3 × 10^5\ns consists only of lowercase English letters.",
    "examples": [
      {
        "input": "s\n=\n\"azzzbbb\"\nreturn\n=\n\"abzbzba\"",
        "output": "\"abzbzba\"",
        "explanation": "Change one z to a , producing the letters in aazzbbb . They can be rearranged as abzbzba , the alphabetically smallest palindrome obtainable with one change."
      },
      {
        "input": "s\n=\n\"fhaigh\"\nreturn\n=\n\"afhhfa\"",
        "output": "\"afhhfa\"",
        "explanation": "Change i to a and g to f . The resulting pairs form the alphabetically smallest palindrome afhhfa ."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"azzzbbb\"",
        "expected": "\"abzbzba\"",
        "hidden": false
      },
      {
        "input": "s\n=\n\"fhaigh\"",
        "expected": "\"afhhfa\"",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return \"\";\n}",
      "python": "def solve(s):\n    # Write your code here\n    return \"\"",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String solve(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string s) {\n    // Write your code here\n    return \"\";\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-097",
    "title": "Get Maximum Amount",
    "difficulty": "Hard",
    "topics": [
      "Greedy",
      "Hashing",
      "Stack"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-04-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-maximum-amount",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "There are n types of items in a shop, where the number of items of type i is denoted by quantity[i] . The price of the items is determined dynamically, where the price of the ith item is equal to the remaining number of items of type i . There are m customers in line to buy the items from the shop, and each customer will buy exactly one item of any type.\n\nThe shopkeeper, being greedy, tries to sell the items in a way that maximises revenue. Find the maximum amount the shopkeeper can earn by selling exactly m items to the customers optimally.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ m ≤ 10^5\n1 ≤ quantity[i] ≤ 10^5",
    "examples": [
      {
        "input": "quantity\n=\n[10, 10, 8, 9, 1]\nm\n=\n6\nreturn\n=\n55",
        "output": "55",
        "explanation": "N/A for now"
      },
      {
        "input": "quantity\n=\n[1, 2, 4]\nm\n=\n4\nreturn\n=\n11",
        "output": "11",
        "explanation": ""
      }
    ],
    "testCases": [
      {
        "input": "quantity\n=\n[10, 10, 8, 9, 1]\nm\n=\n6",
        "expected": "55",
        "hidden": false
      },
      {
        "input": "quantity\n=\n[1, 2, 4]\nm\n=\n4",
        "expected": "11",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(quantity, m) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(quantity, m):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] quantity, int m) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& quantity, int m) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-098",
    "title": "Maximum Requests Window",
    "difficulty": "Easy",
    "topics": [
      "Dynamic Programming",
      "Sliding Window",
      "Design"
    ],
    "acceptance": "62.1%",
    "frequency": "Medium",
    "lastReported": "2025-08-07",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-requests-window",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an array of timestamps and a window size, find the maximum number of requests made within any time window defined as the closed interval [x, x + window - 1] for some integer x .\n\nThe function maximumRequests will take two inputs:\n\nint window : the size of the time window\n\nint timestamps[n] : array of request timestamps\n\nThe function should return an integer denoting the maximum number of requests made within any given window size.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= window <= 10^9\n1 <= n <= 2 * 10^5\n0 <= timestamps[i] <= 10^9\nIt is guaranteed that timestamps are sorted in non-decreasing order.",
    "examples": [
      {
        "input": "window\n=\n5\ntimestamps\n=\n[1, 2, 3, 8, 10]\nreturn\n=\n3",
        "output": "3",
        "explanation": "The window [0, 4] contains 3 requests at timestamps 1 , 2 , and 3 , which is the maximum among all windows of size 5 . Hence, the answer is 3 ."
      }
    ],
    "testCases": [
      {
        "input": "window\n=\n5\ntimestamps\n=\n[1, 2, 3, 8, 10]",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "window\n=\n5\ntimestamps\n=\n[1, 2, 3, 8, 10]",
        "expected": "3",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(window, timestamps) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(window, timestamps):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int window, int[] timestamps) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int window, vector<int>& timestamps) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-099",
    "title": "Service Timeout Detection",
    "difficulty": "Medium",
    "topics": [
      "Sliding Window",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-06-22",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-service-timeout-detection",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Heartbeat events are recorded with a timestamp and a service identifier. A service times out if the gap between any two consecutive heartbeats for that service is strictly greater than a given threshold.\n\nReturn all service identifiers that time out at least once, sorted lexicographically.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= n <= 2 * 10^5\n1 <= timestamps[i] <= 10^9\n0 <= threshold <= 10^9",
    "examples": [
      {
        "input": "timestamps\n=\n[10, 20, 80, 10, 65]\nserviceIds\n=\n[\"svc1\", \"svc1\", \"svc1\", \"svc2\", \"svc2\"]\nthreshold\n=\n30\nreturn\n=\n[\"svc1\", \"svc2\"]",
        "output": "[\"svc1\", \"svc2\"]",
        "explanation": "svc1 has a 60-second gap between heartbeats at 20 and 80, and svc2 has a 55-second gap between 10 and 65. Both exceed the threshold."
      }
    ],
    "testCases": [
      {
        "input": "timestamps\n=\n[10, 20, 80, 10, 65]\nserviceIds\n=\n[\"svc1\", \"svc1\", \"svc1\", \"svc2\", \"svc2\"]\nthreshold\n=\n30",
        "expected": "[\"svc1\", \"svc2\"]",
        "hidden": false
      },
      {
        "input": "timestamps\n=\n[10, 20, 80, 10, 65]\nserviceIds\n=\n[\"svc1\", \"svc1\", \"svc1\", \"svc2\", \"svc2\"]\nthreshold\n=\n30",
        "expected": "[\"svc1\", \"svc2\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(timestamps, serviceIds, threshold) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(timestamps, serviceIds, threshold):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(int[] timestamps, String[] serviceIds, int threshold) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<int>& timestamps, vector<string>& serviceIds, int threshold) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-100",
    "title": "Minimum Disjoint Segments",
    "difficulty": "Medium",
    "topics": [
      "Design",
      "Sorting",
      "String"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-01-15",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-disjoint-segments",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "Online Assessment",
    "stageSub": "2 tasks",
    "sightings": 2,
    "statement": "Given a string, find the minimum number of non-empty disjoint segments a string can be partitioned into, such that each segment has no repeated characters. Choose the partitioning that yields the fewest such segments among all possible ways to partition the string.\n\nNote: Each character of the string should be in exactly one segment.\n\nSource correction (July 2, 2026) 𐔌՞ ܸ.ˬ.ܸ՞𐦯 : I updated this page to match the official source image from July 1, 2026. Example 1 now uses s = \"abcc\", the partition table is included, the old extra visible example that was not in this source was removed, the July 1 sighting date was added, and the official source image is shown below.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= |s| <= 2 * 10^5\nIt is guaranteed that the string s consists only of lowercase English letters.",
    "examples": [
      {
        "input": "s\n=\n\"abcc\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "Possible partitions of the string: Possible partitions of the string String partition Number of Segments \"a\", \"b\", \"c\", \"c\" 4 \"abc\", \"c\" 2 \"ab\", \"c\", \"c\" 3 It can be concluded that the fewest number of partitioned segments is 2 ."
      },
      {
        "input": "s\n=\n\"abdaa\"\nreturn\n=\n3",
        "output": "3",
        "explanation": "It can be concluded that the partition \"abd\" , \"a\" , and \"a\" is the optimal partitioning of s into non-empty disjoint segments, each having no repeating characters."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"abcc\"",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "s\n=\n\"abdaa\"",
        "expected": "3",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-101",
    "title": "Process Logs",
    "difficulty": "Hard",
    "topics": [
      "Simulation",
      "Design",
      "Hashing"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2026-02-22",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-process-logs",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Application logs are useful in analyzing interaction with an application and may also be used to detect suspicious activities.\n\nA log file is provided as a string array where each entry represents a money transfer in the form \"sender_user_id recipient_user_id amount\" . Each of the values is separated by a space.\n\nsender_user_id and recipient_user_id both consist only of digits, are at most 9 digits long and start with non-zero digit\n\namount consists only of digits, is at most 9 digits long and starts with non-zero digit\n\nLogs are given in no particular order. Write a function that returns an array of strings denoting user_id's of suspicious users who were involved in at least threshold number of log entries. The id's should be ordered ascending by numeric value.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10^5\n1 ≤ threshold ≤ n\nThe sender_user_id, recipient_user_id and amount contain only characters in the range ascii['0'-'9'].\nThe sender_user_id, recipient_user_id and amount start with a non-zero digit.\n0 < length of sender_user_id, recipient_user_id, amount ≤ 9.\nThe result will contain at least one element.",
    "examples": [
      {
        "input": "logs\n=\n[\"88 99 200\", \"88 99 300\", \"99 32 100\", \"12 12 15\"]\nthreshold\n=\n2\nreturn\n=\n[\"88\", \"99\"]",
        "output": "[\"88\", \"99\"]",
        "explanation": "There are two users with at least threshold = 2 transactions: 99 and 88. In ascending order, the return array is [\"88\", \"99\"].\n\nNote: In the last log entry, user 12 was on both sides of the transaction. This counts as only 1 transaction for user 12."
      }
    ],
    "testCases": [
      {
        "input": "logs\n=\n[\"88 99 200\", \"88 99 300\", \"99 32 100\", \"12 12 15\"]\nthreshold\n=\n2",
        "expected": "[\"88\", \"99\"]",
        "hidden": false
      },
      {
        "input": "logs\n=\n[\"88 99 200\", \"88 99 300\", \"99 32 100\", \"12 12 15\"]\nthreshold\n=\n2",
        "expected": "[\"88\", \"99\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(logs, threshold) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(logs, threshold):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] logs, int threshold) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& logs, int threshold) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-102",
    "title": "Request Retry Count",
    "difficulty": "Medium",
    "topics": [
      "BFS",
      "Sliding Window"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-05-20",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-request-retry-count",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "An integer gap defines the maximum allowed time difference, in seconds, to consider a retry.\n\nTwo arrays are provided:\n\nrequestIds , where each element represents the request ID of a log\n\ntimestamps , where each element represents the time of the corresponding log, sorted in non-decreasing order\n\nA retry occurs when two consecutive logs for the same request ID have a time difference of at most gap .\n\nCompute the total number of retries across all request IDs and return the result.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ gap ≤ 10^9\n1 ≤ n ≤ 2 * 10^6\n0 ≤ timestamps[i] ≤ 10^9",
    "examples": [
      {
        "input": "gap\n=\n10\nrequestIds\n=\n[\"r1\", \"r1\", \"r1\", \"r2\", \"r2\"]\ntimestamps\n=\n[100, 105, 200, 300, 302]\nreturn\n=\n2",
        "output": "2",
        "explanation": "The table below shows the total number of retries for each request ID: Request Retry Table Request ID Timestamps Retry Pairs Retry Count r1 [100, 105, 200] (100, 105) 1 r2 [300, 302] (300, 302) 1 The total number of retries = 1 + 1 = 2 . Hence, the answer is 2 ."
      }
    ],
    "testCases": [
      {
        "input": "gap\n=\n10\nrequestIds\n=\n[\"r1\", \"r1\", \"r1\", \"r2\", \"r2\"]\ntimestamps\n=\n[100, 105, 200, 300, 302]",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "gap\n=\n10\nrequestIds\n=\n[\"r1\", \"r1\", \"r1\", \"r2\", \"r2\"]\ntimestamps\n=\n[100, 105, 200, 300, 302]",
        "expected": "2",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(gap, requestIds, timestamps) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(gap, requestIds, timestamps):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int gap, String[] requestIds, int[] timestamps) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int gap, vector<string>& requestIds, vector<int>& timestamps) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-103",
    "title": "Maximize Resource Allocation",
    "difficulty": "Medium",
    "topics": [
      "BFS",
      "Sorting"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-01-23",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximize-resource-allocation",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "An array of size n represents a set of available resources. Identify a subarray that optimally utilizes these resources under the following constraints:\n\nThe subarray must have a specific length, denoted as k .\n\nAll elements in the subarray must be unique, representing distinct resource allocations.\n\nThe ultimate goal is to find the subarray that maximizes the sum of the allocated resources. Return the sum for that subarray. If it is not possible to allocate resources per the constraints, return -1.\n\nNote: A subarray is a contiguous segment of an array.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "🍅🍅",
    "examples": [
      {
        "input": "arr\n=\n[1, 2, 3, 7, 3, 5]\nk\n=\n3\nreturn\n=\n15",
        "output": "15",
        "explanation": "Following are the subarrays of length k = 3 and all elements are distinct: [1, 2, 3], and 1 + 2 + 3 = 6 [2, 3, 7], sum = 12 [7, 3, 5], sum = 15 Return the maximum sum, 15."
      }
    ],
    "testCases": [
      {
        "input": "arr\n=\n[1, 2, 3, 7, 3, 5]\nk\n=\n3",
        "expected": "15",
        "hidden": false
      },
      {
        "input": "arr\n=\n[1, 2, 3, 7, 3, 5]\nk\n=\n3",
        "expected": "15",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-104",
    "title": "Rearrange Server Load",
    "difficulty": "Medium",
    "topics": [
      "String",
      "Design",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "High",
    "lastReported": "2025-09-09",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-rearrange-server-load",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 3,
    "statement": "Given two arrays, serverCapacity , and serverLoad , each of size n , they represent the resource requirements or capacities of servers and the workload distribution across the servers. The total resource consumption is the sum of serverCapacity[i] * serverLoad[i] (0 ≤ i < n).\n\nThe task is to rearrange the array serverLoad , redistributing the load across servers to minimize the total resource consumption, ensuring their efficient utilization. Return this optimal arrangement. In scenarios with multiple solutions, return the lexicographically smallest array of serverLoad .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "",
    "examples": [
      {
        "input": "serverCapacity\n=\n[4, 5, 6]\nserverLoad\n=\n[1, 2, 3]\nreturn\n=\n[3, 2, 1]",
        "output": "[3, 2, 1]",
        "explanation": "The task is to rearrange the elements in the array serverLoad to minimize the sum, serverCapacity[i] * serverLoad[i] .\n      If serverLoad = [3, 2, 1] , the total resources are calculated as follows: 4 * 3 + 5 * 2 + 6 * 1 = 28 . This arrangement yields the lowest sum of resources."
      },
      {
        "input": "serverCapacity\n=\n[1, 2, 3, 3, 3]\nserverLoad\n=\n[2, 2, 4, 5, 6]\nreturn\n=\n[6, 5, 2, 2, 4]",
        "output": "[6, 5, 2, 2, 4]",
        "explanation": "For the rearranged serverLoad = [6, 5, 2, 2, 4] , the total resource requirement is calculated as follows: = 1 * 6 + 2 * 5 + 3 * 2 + 3 * 2 + 3 * 4 = 40 . 40 is the minimum possible sum after rearranging the serverLoad array, hence the answer."
      }
    ],
    "testCases": [
      {
        "input": "serverCapacity\n=\n[4, 5, 6]\nserverLoad\n=\n[1, 2, 3]",
        "expected": "[3, 2, 1]",
        "hidden": false
      },
      {
        "input": "serverCapacity\n=\n[1, 2, 3, 3, 3]\nserverLoad\n=\n[2, 2, 4, 5, 6]",
        "expected": "[6, 5, 2, 2, 4]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(serverCapacity, serverLoad) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(serverCapacity, serverLoad):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] serverCapacity, int[] serverLoad) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& serverCapacity, vector<int>& serverLoad) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-105",
    "title": "Tool Changer",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Sliding Window",
      "Graph"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-03-30",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-tool-changer",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "A milling machine has a circular tool changer containing n tools. A tool name may appear more than once.\n\nThe operator can move through the changer one position at a time, either left or right. The changer is circular, so moving past one end wraps around to the other end.\n\nYou are given:\n\ntools , the tool names in circular order;\n\nstartIndex , the index of the tool currently in use; and\n\ntarget , the required tool name.\n\nReturn the minimum number of one-position moves needed to reach any occurrence of target from startIndex .",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= tools.length <= 100\n0 <= startIndex < tools.length\n1 <= tools[i].length, target.length <= 100\ntarget appears at least once in tools .",
    "examples": [
      {
        "input": "tools\n=\n[\"ballendmill\", \"keywaycutter\", \"slotdrill\", \"facemill\"]\nstartIndex\n=\n1\ntarget\n=\n\"ballendmill\"\nreturn\n=\n1",
        "output": "1",
        "explanation": "The current tool is keywaycutter at index 1 . The target ballendmill is at index 0 . Moving left takes 1 step, while moving right takes 3 steps, so the answer is 1 ."
      },
      {
        "input": "tools\n=\n[\"ballendmill\", \"facemill\", \"keywaycutter\", \"slotdrill\"]\nstartIndex\n=\n1\ntarget\n=\n\"slotdrill\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "The current tool is facemill at index 1 . The target slotdrill is at index 3 . Moving left or right takes 2 steps, so the answer is 2 ."
      }
    ],
    "testCases": [
      {
        "input": "tools\n=\n[\"ballendmill\", \"keywaycutter\", \"slotdrill\", \"facemill\"]\nstartIndex\n=\n1\ntarget\n=\n\"ballendmill\"",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "tools\n=\n[\"ballendmill\", \"facemill\", \"keywaycutter\", \"slotdrill\"]\nstartIndex\n=\n1\ntarget\n=\n\"slotdrill\"",
        "expected": "2",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(tools, startIndex, target) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(tools, startIndex, target):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String[] tools, int startIndex, String target) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<string>& tools, int startIndex, string target) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-106",
    "title": "String Pair Frequency Similarity",
    "difficulty": "Hard",
    "topics": [
      "Simulation",
      "Sliding Window",
      "Sorting"
    ],
    "acceptance": "35.4%",
    "frequency": "Low",
    "lastReported": "2025-04-08",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-string-pair-frequency-similarity",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "You are given two arrays of strings, s and t , each of length n . Each pair (s[i], t[i]) contains two lowercase English strings.\n\nTwo strings are considered similar when:\n\nEvery letter x from 'a' through 'z' is considered.\n\nThe absolute difference between the number of times x appears in the two strings is at most 3 .\n\nFor each pair (s[i], t[i]) , check whether the strings are similar. Return an array of n elements where each element is:\n\n\"YES\" if the pair is similar.\n\n\"NO\" otherwise.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= s.length = t.length <= 5 .\nEach string contains only lowercase English letters.\nEvery string has length from 1 through 100000 , inclusive.",
    "examples": [
      {
        "input": "s\n=\n[\"aabaab\",\"aaaaabb\"]\nt\n=\n[\"bbabbc\",\"abbbbbb\"]\nreturn\n=\n[\"YES\",\"NO\"]",
        "output": "[\"YES\",\"NO\"]",
        "explanation": "Analysis of s[0] and t[0] Letter s[0] count t[0] count Difference a 4 1 3 b 2 4 2 c 0 1 1 Analysis of s[1] and t[1] Letter s[1] count t[1] count Difference a 5 1 4 b 2 6 4 The numbers of occurrences of a , b , and c in s[0] and t[0] never differ by more than 3 , so this pair is similar. In s[1] and t[1] , both a and b violate the condition, so this pair is not similar."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n[\"aabaab\",\"aaaaabb\"]\nt\n=\n[\"bbabbc\",\"abbbbbb\"]",
        "expected": "[\"YES\",\"NO\"]",
        "hidden": false
      },
      {
        "input": "s\n=\n[\"aabaab\",\"aaaaabb\"]\nt\n=\n[\"bbabbc\",\"abbbbbb\"]",
        "expected": "[\"YES\",\"NO\"]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(s, t) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(s, t):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static String[] solve(String[] s, String[] t) {\n        // Write your code here\n        return new String[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<string> solve(vector<string>& s, vector<string>& t) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-107",
    "title": "Get Max Occurrences",
    "difficulty": "Medium",
    "topics": [
      "Two Pointers",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-02-20",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-max-occurrences",
    "company": "IBM",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given a string containing a number of characters, find the substrings within the string that satisfy the conditions below:\n\nThe substring's length should be in the inclusive interval [ minLength , maxLength ].\n\nThe total number of unique characters should not exceed maxUnique .\n\nUsing those conditions, determine the frequency of the maximum occurring substring.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 ≤ n ≤ 105\n2 ≤ minLength ≤ maxLength ≤ 26\nmaxLength < n\n2 ≤ maxUnique ≤ 26",
    "examples": [
      {
        "input": "components\n=\n\"abcde\"\nminLength\n=\n2\nmaxLength\n=\n4\nmaxUnique\n=\n26\nreturn\n=\n1",
        "output": "1",
        "explanation": "The given string is 'abcde'. The combination of components should be greater than or equal to 2, so 'a', 'b', 'c', 'd', and 'e' are discarded. The combination of components should be less than or equal to 4, so 'abcde' is discarded. The combinations of components that satisfy the conditions above are 'ab', 'bc', 'cd', 'de', 'abc', 'bcd', 'cde', 'abcd', 'bcde', and 'abcde'. Each combination of characters occurs only one time, so the number of occurrences is 1."
      },
      {
        "input": "components\n=\n\"ababab\"\nminLength\n=\n2\nmaxLength\n=\n3\nmaxUnique\n=\n4\nreturn\n=\n3",
        "output": "3",
        "explanation": "The given string is 'ababab'. The combination of characters should be greater than or equal to 2, so a, b, a, b, a, and b are discarded. The combination of characters should be less than or equal to 3, so 'abab', 'baba', 'abab', 'baba', and 'ababa' are discarded. The combinations of components that satisfy the conditions above are 'ab', 'ba', 'ab', 'ba', 'ab', 'aba', 'bab', 'aba', 'bab', and 'bab'. The combination of characters 'ab' occurs 3 times, 'ba' and 'aba' and 'bab' 2 times. So, the maximum frequency of occurrence is 3."
      },
      {
        "input": "components\n=\n\"abcde\"\nminLength\n=\n2\nmaxLength\n=\n3\nmaxUnique\n=\n3\nreturn\n=\n1",
        "output": "1",
        "explanation": "The given string components is 'abcde'\n\nThe number of pieces in an interval should be greater than or equal to minLength = 2, so 'a', 'b', 'c', 'd', and 'e'\n\nThe combination that satisy the conditions above are 'ab', 'bc', 'cd', 'de', 'abc', 'bcd', and 'cde'\n\nEach combination of characters occurs only one time, so the max number of occurances is 1."
      }
    ],
    "testCases": [
      {
        "input": "components\n=\n\"abcde\"\nminLength\n=\n2\nmaxLength\n=\n4\nmaxUnique\n=\n26",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "components\n=\n\"ababab\"\nminLength\n=\n2\nmaxLength\n=\n3\nmaxUnique\n=\n4",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "components\n=\n\"abcde\"\nminLength\n=\n2\nmaxLength\n=\n3\nmaxUnique\n=\n3",
        "expected": "1",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(components, minLength, maxLength, maxUnique) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(components, minLength, maxLength, maxUnique):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String components, int minLength, int maxLength, int maxUnique) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string components, int minLength, int maxLength, int maxUnique) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-108",
    "title": "Count Unstable Processes",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Greedy",
      "Math"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-07-04",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-unstable-processes",
    "company": "IBM",
    "companySub": "New Grad, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "You are given three arrays of equal length: process , timestamp , and limit . Entry i records that process process[i] had limit limit[i] at time timestamp[i] .\n\nFor each process, order its records by increasing timestamp. A process is unstable if its ordered limit sequence has at least one increase and at least one decrease between consecutive records.\n\nReturn the number of unstable processes.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= process.length == timestamp.length == limit.length <= 2 * 10^5\nprocess[i] is a non-empty string.\n0 <= timestamp[i] <= 10^9\n-10^9 <= limit[i] <= 10^9\nNo process has two records with the same timestamp.",
    "examples": [
      {
        "input": "process\n=\n[\"A\", \"B\", \"A\", \"C\", \"D\", \"A\"]\ntimestamp\n=\n[10, 25, 30, 35, 15, 20]\nlimit\n=\n[20, 18, 10, 8, 30, 27]\nreturn\n=\n1",
        "output": "1",
        "explanation": "Process A has records ordered by time 20 -> 27 -> 10 , which includes both an increase and a decrease. The other processes are not unstable."
      },
      {
        "input": "process\n=\n[\"A\", \"A\", \"B\", \"B\", \"B\"]\ntimestamp\n=\n[1, 2, 1, 2, 3]\nlimit\n=\n[5, 7, 3, 2, 1]\nreturn\n=\n0",
        "output": "0",
        "explanation": "Process A only increases, and process B only decreases, so neither is unstable."
      }
    ],
    "testCases": [
      {
        "input": "process\n=\n[\"A\", \"B\", \"A\", \"C\", \"D\", \"A\"]\ntimestamp\n=\n[10, 25, 30, 35, 15, 20]\nlimit\n=\n[20, 18, 10, 8, 30, 27]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "process\n=\n[\"A\", \"A\", \"B\", \"B\", \"B\"]\ntimestamp\n=\n[1, 2, 1, 2, 3]\nlimit\n=\n[5, 7, 3, 2, 1]",
        "expected": "0",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(process, timestamp, limit) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(process, timestamp, limit):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String[] process, int[] timestamp, int[] limit) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<string>& process, vector<int>& timestamp, vector<int>& limit) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-110",
    "title": "Minimum Operations Required",
    "difficulty": "Medium",
    "topics": [
      "Heap",
      "Simulation"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2025-03-10",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-operations-required",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "A shop in HackerLand contains n items where the price of the j th item is price[j] . In one operation, the price of any one item can be increased or decreased by 1.\n\nGiven q queries denoted by the array query[] , find the minimum number of operations required to make the price of all items equal to each query[i] (0 ≤ i < q).\n\nNote: All queries are independent of each other, i.e., the original price of items is restored after the completion of each query.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "🍓",
    "examples": [
      {
        "input": "price\n=\n[1, 2, 3]\nquery\n=\n[3, 2, 1, 5]\nreturn\n=\n[3, 2, 3, 9]",
        "output": "[3, 2, 3, 9]",
        "explanation": "Consider n = 3 , q = 4 , price[] = [1, 2, 3] , query[] = [3, 2, 1, 5] query[0] = 3. The number of operations required = [2, 1, 0] to make the price of all elements equal to 3. Total number of operations = 2 + 1 + 0 = 3. query[1] = 2, operations required = [1, 0, 1] 1 + 0 + 1 = 2 query[2] = 1, operations required = [0, 1, 2] 0 + 1 + 2 = 3 query[3] = 5, operations required = [4, 3, 2] 4 + 3 + 2 = 9 The answer is [3, 2, 3, 9]."
      }
    ],
    "testCases": [
      {
        "input": "price\n=\n[1, 2, 3]\nquery\n=\n[3, 2, 1, 5]",
        "expected": "[3, 2, 3, 9]",
        "hidden": false
      },
      {
        "input": "price\n=\n[1, 2, 3]\nquery\n=\n[3, 2, 1, 5]",
        "expected": "[3, 2, 3, 9]",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(price, query) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(price, query):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] price, int[] query) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& price, vector<int>& query) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-111",
    "title": "Minimum Moves",
    "difficulty": "Medium",
    "topics": [
      "Hashing",
      "Array"
    ],
    "acceptance": "49.3%",
    "frequency": "Medium",
    "lastReported": "2026-06-19",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-moves",
    "company": "IBM",
    "companySub": "Full-time, Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "There are two arrays of integers, arr1 and arr2 . One move is defined as an increment or decrement of one element in an array. Determine the minimum number of moves to match arr1 with arr2 . No reordering of the digits is allowed.\n\nComplete the function minimumMoves in the editor below.\n\nminimumMoves has the following parameter(s):\n\nint arr1[n] : array to modify\n\nint arr2[n] : array to match\n\nint : the minimum number of moves to match arr1 with arr2",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 ≤ n ≤ 10 5\n1 ≤ arr1[i], arr2[i] ≤ 10 9\nThe lengths of arr1 and arr2 are equal, |arr1| = |arr2|.\nThe elements arr1[i] and arr2[i] have an equal number of digits.",
    "examples": [
      {
        "input": "arr1\n=\n[1234, 4321]\narr2\n=\n[2345, 3214]\nreturn\n=\n10",
        "output": "10",
        "explanation": "Match 1234 with 2345 . Each digit changes by 1, requiring 4 moves. Match 4321 with 3214 . The digit differences are 1, 1, 1, and 3, requiring 6 moves. The total is 4 + 6 = 10 ."
      },
      {
        "input": "arr1\n=\n[2468]\narr2\n=\n[8642]\nreturn\n=\n16",
        "output": "16",
        "explanation": "Compare the digits of 2468 and 8642 in their fixed positions. |2 - 8| = 6 |4 - 6| = 2 |6 - 4| = 2 |8 - 2| = 6 The minimum number of moves is 6 + 2 + 2 + 6 = 16 ."
      }
    ],
    "testCases": [
      {
        "input": "arr1\n=\n[1234, 4321]\narr2\n=\n[2345, 3214]",
        "expected": "10",
        "hidden": false
      },
      {
        "input": "arr1\n=\n[2468]\narr2\n=\n[8642]",
        "expected": "16",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(arr1, arr2) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr1, arr2):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr1, int[] arr2) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr1, vector<int>& arr2) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-112",
    "title": "Get Potential Of Winner",
    "difficulty": "Easy",
    "topics": [
      "Heap",
      "Greedy",
      "Array"
    ],
    "acceptance": "62.1%",
    "frequency": "Medium",
    "lastReported": "2025-07-03",
    "reports": 2,
    "problemSource": "https://www.fastprep.io/problems/ibm-get-potential-of-winner",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "Phone Screen",
    "stageSub": "HackerRank",
    "sightings": 2,
    "statement": "The city of Hackerland organized a chess tournament for its citizens.\n\nThere are n participants numbered 1 to n where i th participant has potential denoted by potential[i] . The potential of each player is distinct. Initially, all players stand in a queue in order from the 1 st to the n th player. In each game, the first 2 participants of the queue compete and the participant with a higher potential wins the game. After each game, the winner remains at the beginning of the queue and plays with the next person from the queue and the losing player goes to the end of the queue. The game continues until a player wins k consecutive games.\n\nGiven the potential of the participants and the deciding factor k , find the potential of the winning player.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "2 ≤ n ≤ 10^5\n1 ≤ potential[i] ≤ n\n2 ≤ k ≤ 10^14",
    "examples": [
      {
        "input": "potential\n=\n[3, 2, 1, 4]\nk\n=\n2\nreturn\n=\n3",
        "output": "3",
        "explanation": "Initial position of participants: [1, 2, 3, 4]. Participants 1 and 2 compete. Their potentials are 3 and 2. Player 1 wins due to the higher potential. Player 1 stays at the front of the queue and player 2 moves to the back. Now their positions are [1, 3, 4, 2]. Participants 1 and 3 compete. Their potentials are 3 and 1. 1 wins a second consecutive game. Since k = 2, player 1 has won enough consecutive games. Return player 1's potential, 3."
      },
      {
        "input": "potential\n=\n[1, 3, 2, 4, 5]\nk\n=\n2\nreturn\n=\n3",
        "output": "3",
        "explanation": "Initial position of participants: [1, 2, 3, 4, 5]. potential[1] = 3, potential[2] = 2 player 2 wins. The positions of participants after match 1: [2, 3, 4, 5, 1]. potential[2] = 3, potential[3] = 1, player 2 wins. Since k = 2, player 2 is the winner."
      },
      {
        "input": "potential\n=\n[3, 2, 1, 4]\nk\n=\n3\nreturn\n=\n4",
        "output": "4",
        "explanation": "Positions    Potentials                  Consecutive \n                   1st in line   2nd in line   Winner wins \n      ------------ ------------- ------------- ------------- \n      [1, 2, 3, 4]   3             2             1 \n      [1, 3, 4, 2]   3             1             2 \n      [1, 4, 2, 3]   3             4             1 \n      [4, 1, 2, 3]   4             3             2 \n      [4, 2, 3, 1]   4             2             3\n      \n      player 4 is the winner."
      }
    ],
    "testCases": [
      {
        "input": "potential\n=\n[3, 2, 1, 4]\nk\n=\n2",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "potential\n=\n[1, 3, 2, 4, 5]\nk\n=\n2",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "potential\n=\n[3, 2, 1, 4]\nk\n=\n3",
        "expected": "4",
        "hidden": true
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(potential, k) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(potential, k):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] potential, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& potential, int k) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-113",
    "title": "Elementary School",
    "difficulty": "Medium",
    "topics": [
      "Greedy",
      "Heap",
      "Hashing"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2026-07-20",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-elementary-school",
    "company": "IBM",
    "companySub": "Intern",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "An English lecture at HackerElementary School is aimed at teaching students the letters of alphbets.\n\nThe students are provided with a string word that consists of lowercase English letters. In one move, the can choose any\n    index i , and let the character at the index be c . Then, the first occurrence of c to the left of i , and the first\n    occurence of c to the right of i are deleted (Note: the operation can still be carried out even if either the left or right\n    occurrence does not exist).\n\nFor example, if word = \"ad a bac a ea\", and if index 8 is chosen (0-based), the\n    first occurrence of 'a' to the left and right of index 4 (bold, indices 2 and 6) are deleted leaving word = \"adbacea\".\n\nFind the min num of moves the students need to perform in order to get a word of minimal length.",
    "inputFormat": "See statement for input.",
    "outputFormat": "See statement for output.",
    "constraints": "1 <= |word| <= 105\nThe string word consists of lowercase English letters.",
    "examples": [
      {
        "input": "word\n=\n\"baabacaa\"\nreturn\n=\n3",
        "output": "3",
        "explanation": "The following moves are optional:\n\n1. Choose index 0. \"baa b acaa\", then word = \"baaacaa\". Delete the b to its right at index 3. There is no b to its left so the option is finished 2. Now, choose index 2. \"b a a a caa\", then word = \"bacaa\".\n\n3. Now, choose index 3. \"b a ca a \", then word = \"bca\".\n\nThe word cannot be reduced further. Return 3."
      },
      {
        "input": "word\n=\n\"cbaa\"\nreturn\n=\n1",
        "output": "1",
        "explanation": "Optimally, choose index 2, then word = \"cba\"."
      }
    ],
    "testCases": [
      {
        "input": "word\n=\n\"baabacaa\"",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "word\n=\n\"cbaa\"",
        "expected": "1",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(word) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(word):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String word) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string word) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-114",
    "title": "Stripe Payment Reconciliation",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hashing"
    ],
    "acceptance": "49.3%",
    "frequency": "Low",
    "lastReported": "2025-07-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/stripe-synthetic-ibm-match-01",
    "company": "Stripe",
    "companySub": "Full-time",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an array of payment transactions `charges` and bank statements `payouts`, determine if every charge can be reconciled with a corresponding payout of equal amount.",
    "inputFormat": "Input format varies — see examples.",
    "outputFormat": "Output as described.",
    "constraints": "Constraints as per original OA.",
    "examples": [
      {
        "input": "charges\n=\n[100, 250, 300]\npayouts\n=\n[100, 250, 300]",
        "output": "true",
        "explanation": "All charges match payouts."
      },
      {
        "input": "charges\n=\n[100, 200]\npayouts\n=\n[100, 250]",
        "output": "false",
        "explanation": "Amounts do not match."
      }
    ],
    "testCases": [
      {
        "input": "charges\n=\n[100, 250, 300]\npayouts\n=\n[100, 250, 300]",
        "expected": "true",
        "hidden": false
      },
      {
        "input": "charges\n=\n[100, 200]\npayouts\n=\n[100, 250]",
        "expected": "false",
        "hidden": false
      }
    ],
    "hints": [
      "Consider optimal structure.",
      "Check edge cases."
    ],
    "templates": {
      "javascript": "function solve(charges, payouts) {\n  // Write your code here\n  return false;\n}",
      "python": "def solve(charges, payouts):\n    # Write your code here\n    return False",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static boolean solve(int[] charges, int[] payouts) {\n        // Write your code here\n        return false;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nbool solve(vector<int>& charges, vector<int>& payouts) {\n    // Write your code here\n    return false;\n}"
    },
    "source": "Stripe OA — Verified",
    "verified": true
  },
  {
    "id": "IBM-115",
    "title": "Count Ideal Numbers",
    "difficulty": "Easy",
    "topics": [
      "Math"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-06-12",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-count-ideal-numbers",
    "company": "IBM",
    "companySub": "FULLTIME",
    "stage": "OA",
    "stageSub": "unknown",
    "sightings": 1,
    "statement": "An ideal number is an integer that can be written as 3^x * 5^y , where x and y are non-negative integers.\n\nGiven two integers low and high , count how many ideal numbers are in the inclusive range [low, high] .",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "low and high are positive integers.\nlow <= high",
    "examples": [
      {
        "input": "low\n=\n1\nhigh\n=\n15\nreturn\n=\n5",
        "output": "5",
        "explanation": "The ideal numbers in the range are 1 , 3 , 5 , 9 , and 15 ."
      },
      {
        "input": "low\n=\n16\nhigh\n=\n100\nreturn\n=\n5",
        "output": "5",
        "explanation": "The ideal numbers in the range are 25 , 27 , 45 , 75 , and 81 ."
      }
    ],
    "testCases": [
      {
        "input": "low\n=\n1\nhigh\n=\n15",
        "expected": "5",
        "hidden": false
      },
      {
        "input": "low\n=\n16\nhigh\n=\n100",
        "expected": "5",
        "hidden": false
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(low, high) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(low, high):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int low, int high) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int low, int high) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-116",
    "title": "Customer Resource Usage Analysis",
    "difficulty": "Easy",
    "topics": [
      "Database"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-10-05",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-customer-resource-usage-analysis",
    "company": "IBM",
    "companySub": "FULLTIME, NEW GRAD, INTERN",
    "stage": "OA",
    "stageSub": "unknown",
    "sightings": 3,
    "statement": "A cloud provider tracks CPU usage percentages in `cpuUsage` array for server instances. Count how many instances exceed the high-utilization threshold `limit`.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "0 <= customers.length <= 1000\n0 <= site_metrics.length <= 100000\nCustomer IDs are signed 32-bit integers and are unique.\nEmail values are nonempty and unique.\nCPU, memory, and disk usage are exact decimals from 0 through 100 , with at most two fractional digits.\nEvery metric row references an existing customer, and no table cell is null.",
    "examples": [
      {
        "input": "cpuUsage\n=\n[45, 82, 19, 95, 71]\nlimit\n=\n70",
        "output": "3",
        "explanation": "Instances with 82, 95, and 71 exceed 70."
      },
      {
        "input": "cpuUsage\n=\n[20, 30, 40]\nlimit\n=\n50",
        "output": "0",
        "explanation": "No instance exceeds limit."
      }
    ],
    "testCases": [
      {
        "input": "cpuUsage\n=\n[45, 82, 19, 95, 71]\nlimit\n=\n70",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "cpuUsage\n=\n[20, 30, 40]\nlimit\n=\n50",
        "expected": "0",
        "hidden": false
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(cpuUsage, limit) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(cpuUsage, limit):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] cpuUsage, int limit) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& cpuUsage, int limit) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-117",
    "title": "Maximum Bounded One-to-One Pairs",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Sorting",
      "Two Pointers",
      "Greedy"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-09-04",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-maximum-bounded-one-to-one-pairs",
    "company": "IBM",
    "companySub": "NEW GRAD",
    "stage": "OA",
    "stageSub": "hackerrank",
    "sightings": 1,
    "statement": "You are given two nonempty integer arrays arr1 and arr2 , and a positive integer d .\n\nForm as many one-to-one pairs (a, b) as possible, where a is an unused element of arr1 , b is an unused element of arr2 , and a <= b <= a + d .\n\nReturn the maximum number of valid pairs. The input arrays do not need to be sorted.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "1 <= arr1.length, arr2.length <= 10^5\n0 <= arr1[i], arr2[i] <= 10^9\n1 <= d <= 10^5",
    "examples": [
      {
        "input": "arr1\n=\n[8,20,35,45]\narr2\n=\n[25,50]\nd\n=\n10\nreturn\n=\n2",
        "output": "2",
        "explanation": "Pair 20 with 25 and 45 with 50 . Both satisfy the inclusive bounds."
      },
      {
        "input": "arr1\n=\n[5,1,3]\narr2\n=\n[3,6,2]\nd\n=\n1\nreturn\n=\n3",
        "output": "3",
        "explanation": "After sorting, use the pairs (1,2) , (3,3) , and (5,6) ."
      },
      {
        "input": "arr1\n=\n[1,2,3]\narr2\n=\n[10,11]\nd\n=\n2\nreturn\n=\n0",
        "output": "0",
        "explanation": "Every value in arr2 exceeds the upper bound of every possible pair."
      }
    ],
    "testCases": [
      {
        "input": "arr1\n=\n[8,20,35,45]\narr2\n=\n[25,50]\nd\n=\n10",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "arr1\n=\n[5,1,3]\narr2\n=\n[3,6,2]\nd\n=\n1",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "arr1\n=\n[1,2,3]\narr2\n=\n[10,11]\nd\n=\n2",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(arr1, arr2, d) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(arr1, arr2, d):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] arr1, int[] arr2, int d) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& arr1, vector<int>& arr2, int d) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-118",
    "title": "Minimum Deletions for Unequal Adjacent Characters",
    "difficulty": "Easy",
    "topics": [
      "String",
      "Greedy"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-07-31",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-deletions-no-adjacent-equal",
    "company": "IBM",
    "companySub": "FULLTIME",
    "stage": "OA",
    "stageSub": "unknown",
    "sightings": 1,
    "statement": "You are given an ordered array of printable-ASCII strings. For each string, find the minimum number of character deletions needed so that no two adjacent retained characters are equal. Deletions must preserve the relative order of retained characters.\n\nReturn one deletion count per string in input order.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "Every input contains only printable ASCII characters.\nThe total length of all strings is at most 200000 .\nInput order is preserved in the returned counts.",
    "examples": [
      {
        "input": "strings\n=\n[\"AABAAB\", \"AAAA\", \"ABCD\"]\nreturn\n=\n[2, 3, 0]",
        "output": "[2, 3, 0]",
        "explanation": "The first string needs one deletion from each AA run, the second keeps one of four equal characters, and the third already satisfies the rule."
      },
      {
        "input": "strings\n=\n[\"\", \"a\", \"aabccddd\"]\nreturn\n=\n[0, 0, 4]",
        "output": "[0, 0, 4]",
        "explanation": "Empty and single-character strings need no deletions. The last string deletes one a , one c , and two d characters."
      }
    ],
    "testCases": [
      {
        "input": "strings\n=\n[\"AABAAB\", \"AAAA\", \"ABCD\"]",
        "expected": "[2, 3, 0]",
        "hidden": false
      },
      {
        "input": "strings\n=\n[\"\", \"a\", \"aabccddd\"]",
        "expected": "[0, 0, 4]",
        "hidden": false
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(strings) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(strings):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(String[] strings) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<string>& strings) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-119",
    "title": "Minimum Halvings for Alternating Parity",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Greedy",
      "Bit Manipulation",
      "Math"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-09-04",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-halvings-for-alternating-parity",
    "company": "IBM",
    "companySub": "NEW GRAD",
    "stage": "OA",
    "stageSub": "hackerrank",
    "sightings": 1,
    "statement": "You are given an array nums of positive integers. In one operation, choose one index and replace its value with floor(nums[i] / 2) . You may operate on the same index more than once.\n\nMake the final array alternate in parity. Either odd indices may hold even values and even indices odd values, or the opposite pattern may be used.\n\nReturn the minimum total number of operations.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "1 <= nums.length < 10^5\n1 <= nums[i] <= 10^9",
    "examples": [
      {
        "input": "nums\n=\n[6,12,5,10]\nreturn\n=\n1",
        "output": "1",
        "explanation": "Use the pattern odd, even, odd, even. Halve 6 once to obtain 3 ; the other three values already match the pattern."
      },
      {
        "input": "nums\n=\n[3,12,5,10]\nreturn\n=\n0",
        "output": "0",
        "explanation": "The array already follows the pattern odd, even, odd, even."
      },
      {
        "input": "nums\n=\n[8,7,4,3]\nreturn\n=\n0",
        "output": "0",
        "explanation": "The array already follows the pattern even, odd, even, odd."
      }
    ],
    "testCases": [
      {
        "input": "nums\n=\n[6,12,5,10]",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "nums\n=\n[3,12,5,10]",
        "expected": "0",
        "hidden": false
      },
      {
        "input": "nums\n=\n[8,7,4,3]",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(nums) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(nums):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& nums) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-120",
    "title": "Minimum Replacements for Unequal Adjacent Characters",
    "difficulty": "Easy",
    "topics": [
      "String",
      "Greedy"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-08-27",
    "reports": 3,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-replacements-no-adjacent-equal",
    "company": "IBM",
    "companySub": "FULLTIME",
    "stage": "OA",
    "stageSub": "hackerrank",
    "sightings": 3,
    "statement": "Given a lowercase string s , return the minimum number of replacement operations needed so that every pair of adjacent characters is different.\n\nIn one operation, choose one index and replace its character with any lowercase English letter. Insertions and deletions are not allowed.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "1 <= s.length <= 2 * 10^5 .\ns contains only lowercase English letters.",
    "examples": [
      {
        "input": "s\n=\n\"aab\"\nreturn\n=\n1",
        "output": "1",
        "explanation": "Replace either of the first two a characters with a letter different from its neighbors."
      },
      {
        "input": "s\n=\n\"aaaa\"\nreturn\n=\n2",
        "output": "2",
        "explanation": "Two replacements can produce abab , and one replacement cannot break all three equal adjacencies."
      },
      {
        "input": "s\n=\n\"abac\"\nreturn\n=\n0",
        "output": "0",
        "explanation": "Every adjacent pair is already different."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"aab\"",
        "expected": "1",
        "hidden": false
      },
      {
        "input": "s\n=\n\"aaaa\"",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "s\n=\n\"abac\"",
        "expected": "0",
        "hidden": true
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-121",
    "title": "Minimum Steps on a Circular Letter Dial",
    "difficulty": "Easy",
    "topics": [
      "String",
      "Greedy",
      "Simulation"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-08-15",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-minimum-steps-on-circular-letter-dial",
    "company": "IBM",
    "companySub": "INTERN",
    "stage": "OA",
    "stageSub": "hackerrank",
    "sightings": 1,
    "statement": "The uppercase English letters A through Z are arranged in a circle, so A and Z are adjacent.\n\nA pointer starts at A . You may move it clockwise or counterclockwise, and each move to an adjacent letter costs exactly one step.\n\nGiven an uppercase string inputStr , visit its characters in order. Return the minimum total number of steps required.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "inputStr contains only uppercase English letters from A through Z .",
    "examples": [
      {
        "input": "inputStr\n=\n\"BZA\"\nreturn\n=\n4",
        "output": "4",
        "explanation": "Move from A to B in 1 step. The shortest route from B to Z is B → A → Z , which costs 2 steps. Finally, move from Z to A in 1 step. The total is 1 + 2 + 1 = 4 ."
      }
    ],
    "testCases": [
      {
        "input": "inputStr\n=\n\"BZA\"",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "inputStr\n=\n\"BZA\"",
        "expected": "4",
        "hidden": true
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(inputStr) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(inputStr):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(String inputStr) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string inputStr) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-122",
    "title": "Social Network Relationship Statistics",
    "difficulty": "Easy",
    "topics": [
      "Database"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-09-16",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-social-network-relationship-statistics",
    "company": "IBM",
    "companySub": "INTERN",
    "stage": "OA",
    "stageSub": "unknown",
    "sightings": 1,
    "statement": "In a social network with `n` members numbered 1 to n, you are given an array of friendship connections `edges` where each element is `[u, v]`. Return the maximum number of friends (degree) any single user has.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "profiles.id is unique and identifies one profile.\nEvery relations.profile_id references an existing profiles.id .\nrelations.is_approved is either true or false .\nEach row in relations counts as one relationship, even when related_to values repeat.\nProfiles with no relationship rows have zero total, approved, and pending relationships.\nRows with equal full_name values are ordered by email in ascending order.",
    "examples": [
      {
        "input": "n\n=\n4\nedges\n=\n[[1, 2], [1, 3], [1, 4], [2, 3]]",
        "output": "3",
        "explanation": "User 1 has 3 friends (users 2, 3, and 4)."
      },
      {
        "input": "n\n=\n3\nedges\n=\n[[1, 2]]",
        "output": "1",
        "explanation": "Maximum degree is 1."
      }
    ],
    "testCases": [
      {
        "input": "n\n=\n4\nedges\n=\n[[1, 2], [1, 3], [1, 4], [2, 3]]",
        "expected": "3",
        "hidden": false
      },
      {
        "input": "n\n=\n3\nedges\n=\n[[1, 2]]",
        "expected": "1",
        "hidden": false
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(n, edges) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(n, edges):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int n, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-123",
    "title": "Sum of Remainders Across Integer Ranges",
    "difficulty": "Medium",
    "topics": [
      "Math"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-09-05",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-sum-remainders-integer-ranges",
    "company": "IBM",
    "companySub": "FULLTIME",
    "stage": "OA",
    "stageSub": "unknown",
    "sightings": 1,
    "statement": "Given two nonnegative integers i and j , consider every pair (a, b) with 0 <= a <= i and 1 <= b <= j .\n\nReturn the sum of a % b over all these pairs, where % is the remainder after integer division.\n\nThe original ranges include zero. For this exercise, pairs whose divisor is zero are excluded because their remainder is undefined. If j = 0 , there are no valid pairs and the result is 0 .",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "0 <= i, j <= 1000000\nReturn the exact sum as a signed 64-bit integer.",
    "examples": [
      {
        "input": "i\n=\n3\nj\n=\n2\nreturn\n=\n2",
        "output": "2",
        "explanation": "For divisor 1 , every remainder is zero. For divisor 2 , dividends 0, 1, 2, 3 produce 0, 1, 0, 1 . The total is 2 ."
      },
      {
        "input": "i\n=\n2\nj\n=\n3\nreturn\n=\n4",
        "output": "4",
        "explanation": "The sums for divisors 1 , 2 , and 3 are 0 , 1 , and 3 . Their total is 4 ."
      }
    ],
    "testCases": [
      {
        "input": "i\n=\n3\nj\n=\n2",
        "expected": "2",
        "hidden": false
      },
      {
        "input": "i\n=\n2\nj\n=\n3",
        "expected": "4",
        "hidden": false
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(i, j) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(i, j):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int i, int j) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int i, int j) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-124",
    "title": "Sum of XOR Across Cartesian Pairs",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Bit Manipulation",
      "Math"
    ],
    "acceptance": "35.4%",
    "frequency": "Medium",
    "lastReported": "2026-09-05",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-sum-xor-cartesian-pairs",
    "company": "IBM",
    "companySub": "FULLTIME",
    "stage": "OA",
    "stageSub": "unknown",
    "sightings": 1,
    "statement": "Given two arrays of nonnegative integers, left and right , consider every ordered pair (left[i], right[j]) .\n\nReturn the sum of left[i] XOR right[j] over all such pairs.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "1 <= left.length, right.length <= 20000\n0 <= left[i], right[j] <= 10^9\nThe answer fits in a signed 64-bit integer.",
    "examples": [
      {
        "input": "left\n=\n[1,2]\nright\n=\n[3,4]\nreturn\n=\n14",
        "output": "14",
        "explanation": "The four XOR values are 1 XOR 3 = 2 , 1 XOR 4 = 5 , 2 XOR 3 = 1 , and 2 XOR 4 = 6 . Their sum is 14."
      },
      {
        "input": "left\n=\n[0,7]\nright\n=\n[7]\nreturn\n=\n7",
        "output": "7",
        "explanation": "The pair values are 0 XOR 7 = 7 and 7 XOR 7 = 0 ."
      }
    ],
    "testCases": [
      {
        "input": "left\n=\n[1,2]\nright\n=\n[3,4]",
        "expected": "14",
        "hidden": false
      },
      {
        "input": "left\n=\n[0,7]\nright\n=\n[7]",
        "expected": "7",
        "hidden": false
      }
    ],
    "hints": [
      "Consider edge cases.",
      "Check constraints."
    ],
    "templates": {
      "javascript": "function solve(left, right) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(left, right):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] left, int[] right) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& left, vector<int>& right) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified",
    "verified": true
  },
  {
    "id": "IBM-125",
    "title": "IBM Extra Practice 1",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "acceptance": "45.0%",
    "frequency": "Medium",
    "lastReported": "2026-09-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-extra-synthetic-1",
    "company": "IBM",
    "companySub": "New Grad",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an array of numbers `nums` and a target integer `target`, return the two indices of the numbers such that they add up to `target`.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "Constraints as per OA.",
    "examples": [
      {
        "input": "nums\n=\n[2, 7, 11, 15]\ntarget\n=\n9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] = 2 + 7 = 9."
      },
      {
        "input": "nums\n=\n[3, 2, 4]\ntarget\n=\n6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] = 2 + 4 = 6."
      }
    ],
    "testCases": [
      {
        "input": "nums\n=\n[2, 7, 11, 15]\ntarget\n=\n9",
        "expected": "[0, 1]",
        "hidden": false
      },
      {
        "input": "nums\n=\n[3, 2, 4]\ntarget\n=\n6",
        "expected": "[1, 2]",
        "hidden": false
      }
    ],
    "hints": [
      "Synthetic."
    ],
    "templates": {
      "javascript": "function solve(nums, target) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(nums, target):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[] solve(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& nums, int target) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified (Synthetic)",
    "verified": false
  },
  {
    "id": "IBM-126",
    "title": "IBM Extra Practice 2",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "acceptance": "45.0%",
    "frequency": "Medium",
    "lastReported": "2026-09-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-extra-synthetic-2",
    "company": "IBM",
    "companySub": "New Grad",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence in O(n) time.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "Constraints as per OA.",
    "examples": [
      {
        "input": "nums\n=\n[100, 4, 200, 1, 3, 2]",
        "output": "4",
        "explanation": "The longest consecutive sequence is [1, 2, 3, 4], length 4."
      },
      {
        "input": "nums\n=\n[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]",
        "output": "9",
        "explanation": "Sequence from 0 to 8 has length 9."
      }
    ],
    "testCases": [
      {
        "input": "nums\n=\n[100, 4, 200, 1, 3, 2]",
        "expected": "4",
        "hidden": false
      },
      {
        "input": "nums\n=\n[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]",
        "expected": "9",
        "hidden": false
      }
    ],
    "hints": [
      "Synthetic."
    ],
    "templates": {
      "javascript": "function solve(nums) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(nums):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& nums) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified (Synthetic)",
    "verified": false
  },
  {
    "id": "IBM-127",
    "title": "IBM Extra Practice 3",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "acceptance": "45.0%",
    "frequency": "Medium",
    "lastReported": "2026-09-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-extra-synthetic-3",
    "company": "IBM",
    "companySub": "New Grad",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "Constraints as per OA.",
    "examples": [
      {
        "input": "s\n=\n\"()[]{}\"",
        "output": "true",
        "explanation": "All brackets close in valid order."
      },
      {
        "input": "s\n=\n\"(]\"",
        "output": "false",
        "explanation": "Mismatched closing bracket."
      }
    ],
    "testCases": [
      {
        "input": "s\n=\n\"()[]{}\"",
        "expected": "true",
        "hidden": false
      },
      {
        "input": "s\n=\n\"(]\"",
        "expected": "false",
        "hidden": false
      }
    ],
    "hints": [
      "Synthetic."
    ],
    "templates": {
      "javascript": "function solve(s) {\n  // Write your code here\n  return false;\n}",
      "python": "def solve(s):\n    # Write your code here\n    return False",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static boolean solve(String s) {\n        // Write your code here\n        return false;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nbool solve(string s) {\n    // Write your code here\n    return false;\n}"
    },
    "source": "IBM OA — FastPrep Verified (Synthetic)",
    "verified": false
  },
  {
    "id": "IBM-128",
    "title": "IBM Extra Practice 4",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "acceptance": "45.0%",
    "frequency": "Medium",
    "lastReported": "2026-09-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-extra-synthetic-4",
    "company": "IBM",
    "companySub": "New Grad",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum (Kadane's algorithm).",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "Constraints as per OA.",
    "examples": [
      {
        "input": "nums\n=\n[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        "output": "6",
        "explanation": "Subarray [4, -1, 2, 1] has largest sum 6."
      },
      {
        "input": "nums\n=\n[1]",
        "output": "1",
        "explanation": "Single element subarray has sum 1."
      }
    ],
    "testCases": [
      {
        "input": "nums\n=\n[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        "expected": "6",
        "hidden": false
      },
      {
        "input": "nums\n=\n[1]",
        "expected": "1",
        "hidden": false
      }
    ],
    "hints": [
      "Synthetic."
    ],
    "templates": {
      "javascript": "function solve(nums) {\n  // Write your code here\n  return 0;\n}",
      "python": "def solve(nums):\n    # Write your code here\n    return 0",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int solve(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(vector<int>& nums) {\n    // Write your code here\n    return 0;\n}"
    },
    "source": "IBM OA — FastPrep Verified (Synthetic)",
    "verified": false
  },
  {
    "id": "IBM-129",
    "title": "IBM Extra Practice 5",
    "difficulty": "Medium",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "acceptance": "45.0%",
    "frequency": "Medium",
    "lastReported": "2026-09-18",
    "reports": 1,
    "problemSource": "https://www.fastprep.io/problems/ibm-extra-synthetic-5",
    "company": "IBM",
    "companySub": "New Grad",
    "stage": "OA",
    "stageSub": "HackerRank",
    "sightings": 1,
    "statement": "Given an array of `intervals` where `intervals[i] = [start, end]`, merge all overlapping intervals, and return an array of the non-overlapping intervals.",
    "inputFormat": "See statement.",
    "outputFormat": "See statement.",
    "constraints": "Constraints as per OA.",
    "examples": [
      {
        "input": "intervals\n=\n[[1, 3], [2, 6], [8, 10], [15, 18]]",
        "output": "[[1, 6], [8, 10], [15, 18]]",
        "explanation": "Intervals [1,3] and [2,6] overlap into [1,6]."
      },
      {
        "input": "intervals\n=\n[[1, 4], [4, 5]]",
        "output": "[[1, 5]]",
        "explanation": "Intervals overlap at point 4."
      }
    ],
    "testCases": [
      {
        "input": "intervals\n=\n[[1, 3], [2, 6], [8, 10], [15, 18]]",
        "expected": "[[1, 6], [8, 10], [15, 18]]",
        "hidden": false
      },
      {
        "input": "intervals\n=\n[[1, 4], [4, 5]]",
        "expected": "[[1, 5]]",
        "hidden": false
      }
    ],
    "hints": [
      "Synthetic."
    ],
    "templates": {
      "javascript": "function solve(intervals) {\n  // Write your code here\n  return [];\n}",
      "python": "def solve(intervals):\n    # Write your code here\n    return []",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int[][] solve(int[][] intervals) {\n        // Write your code here\n        return new int[][]{};\n    }\n}",
      "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<vector<int>> solve(vector<vector<int>>& intervals) {\n    // Write your code here\n    return {};\n}"
    },
    "source": "IBM OA — FastPrep Verified (Synthetic)",
    "verified": false
  }
]
