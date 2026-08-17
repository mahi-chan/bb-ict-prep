# Full Topic Inventory — Bangladesh Bank AD (ICT)

Companion to `BUILD-PLAN.md`. This is the authoritative list of what every subject page must
cover. Nothing important should be missing; if a topic is not here, it does not get written.

**How to read this.** Each subject has two blocks:

- **From your topics list** — verbatim coverage of `probable topics.pdf`. Non-negotiable.
- **Added coverage** — topics not in your PDF that I judge important for this exam,
  grouped by sub-area.

Items marked **⚑** are high-frequency: they have appeared in the supplied papers or are
standard repeat questions. Every ⚑ item needs a fully worked example on its page, not just a
definition.

---

## 1. Computer Fundamentals

**From your topics list:** generations of computer, computer hardware, memory system,
software, input/output devices and memory, virus, antivirus, number systems, anti-virus
software names.

**Added coverage**

- **Classification & history** — generations in detail (vacuum tube → transistor → IC →
  microprocessor → AI era); analog vs digital vs hybrid; micro, mini, mainframe, super;
  workstation, server, embedded systems; Moore's law.
- **Number systems ⚑** — binary/octal/decimal/hexadecimal conversion in all directions;
  fractional conversion; binary arithmetic (add, subtract, multiply, divide); 1's and 2's
  complement; signed magnitude; overflow detection; BCD, Gray code, Excess-3.
- **Character encoding** — ASCII and extended ASCII, EBCDIC, Unicode, UTF-8 vs UTF-16,
  Bangla encoding (Bijoy vs Unicode).
- **Memory** — RAM types (SRAM, DRAM, SDRAM, DDR generations), ROM types (PROM, EPROM,
  EEPROM, flash), cache levels L1/L2/L3, registers, memory hierarchy pyramid, volatile vs
  non-volatile, access-speed ordering.
- **Storage** — HDD geometry (platter, track, sector, cylinder, head), SSD and NVMe, optical
  media and capacities, magnetic tape, storage-unit math from bit to yottabyte ⚑.
- **Input devices** — keyboard, mouse, scanner, OCR, OMR, MICR ⚑, barcode and QR readers,
  biometric scanners, touchscreen, light pen, digitizer, joystick, webcam.
- **Output devices** — monitor types (CRT, LCD, LED, OLED), resolution, DPI, refresh rate;
  printers impact vs non-impact (dot matrix, inkjet, laser, thermal); plotter; projector.
- **Ports & buses** — USB generations, HDMI, VGA, serial vs parallel; system bus split into
  data, address and control; bus width vs addressable memory calculation ⚑.
- **Motherboard & boot** — chipset, north/south bridge, CMOS, BIOS vs UEFI, POST, cold vs
  warm boot, booting sequence.
- **Software** — system vs application software; OS, utility, firmware, device driver;
  translators (compiler, interpreter, assembler) and their comparison ⚑; generations of
  programming languages 1GL–5GL; open source vs proprietary; freeware, shareware, FOSS;
  licence types (GPL, MIT, Apache); software piracy.
- **Malware & antivirus ⚑** — virus types (boot sector, file infector, macro, polymorphic,
  metamorphic, stealth, resident, multipartite); worm; Trojan; ransomware; spyware; adware;
  rootkit; logic bomb. Antivirus product names (Kaspersky, Norton, Avast, AVG, Bitdefender,
  McAfee, ESET NOD32, Windows Defender, Avira, Trend Micro). Detection techniques —
  signature, heuristic, behavioural, sandboxing.
- **Ethics & environment** — computer ethics, e-waste, green computing, ergonomics,
  digital divide.

---

## 2. C Programming

**From your topics list:** data types, variables, iteration, size of data types, logic, unary
operators, control statements, break, continue, output prediction, string output, pointers,
array name as pointer, dynamic memory allocation, structures, book output problems.

**Added coverage**

- **Program structure** — tokens, keywords, identifiers, constants, escape sequences,
  comments; compilation pipeline (preprocess → compile → assemble → link); header files.
- **Types & qualifiers** — `short`/`long`/`signed`/`unsigned`, `sizeof` ⚑, `const`,
  `volatile`, `typedef`, `enum`, implicit vs explicit conversion, integer promotion,
  overflow behaviour.
- **Operators ⚑** — arithmetic, relational, logical, bitwise (`&`, `|`, `^`, `~`, `<<`,
  `>>`), assignment, ternary, comma; full precedence and associativity table; pre- vs
  post-increment traps; short-circuit evaluation.
- **Control flow** — `if`/`else` and nesting, `switch` with fallthrough, `while`,
  `do-while`, `for`, nested loops, `break`, `continue`, `goto`, loop-trace dry runs ⚑.
- **Functions** — prototype vs definition, call by value vs call by reference ⚑, recursion
  (factorial, Fibonacci, GCD, Tower of Hanoi), scope and lifetime, storage classes (`auto`,
  `register`, `static`, `extern`) ⚑.
- **Arrays** — 1D, 2D and multidimensional; initialisation; passing to functions; row-major
  layout; address calculation; array–pointer duality.
- **Strings ⚑** — character array vs literal, null terminator, `string.h` functions
  (`strlen`, `strcpy`, `strcat`, `strcmp`, `strstr`, `strtok`) and manual implementations;
  classic problems — reverse, palindrome, vowel count, word count, character frequency.
- **Pointers ⚑** — declaration and dereference, `NULL`, void pointer, pointer to pointer,
  pointer arithmetic, array of pointers vs pointer to array, function pointers, dangling and
  wild pointers, `const` with pointers.
- **Dynamic memory ⚑** — `malloc`, `calloc`, `realloc`, `free`; comparison table; memory
  leaks; dynamic 1D and 2D arrays.
- **Structures & unions** — nested structures, array of structures, pointer to structure and
  the arrow operator, self-referential structures, structure vs union comparison ⚑, bit
  fields, padding and alignment.
- **File handling** — `fopen` modes, `fclose`, character/line/formatted/block I/O,
  `fseek`/`ftell`/`rewind`, EOF handling, text vs binary files.
- **Preprocessor** — object-like and function-like macros, macro pitfalls, `#include ""` vs
  `<>`, conditional compilation, `#pragma`.
- **Misc** — command-line arguments (`argc`, `argv`), `void`, exit codes, common
  "find the error" and "predict the output" patterns ⚑.

---

## 3. Data Structures

**From your topics list:** time complexity, array, linked list, stack, queue, prefix and
postfix, tree, BST, heap, max heap, min heap, priority queue; searching — linear and binary;
sorting — selection, insertion, bubble, merge, quick, radix with code, flowchart and
complexity; graph — BFS, DFS, bipartite.

**Added coverage**

- **Foundations** — ADT vs data structure, linear vs non-linear, static vs dynamic,
  time and space complexity, best/average/worst case.
- **Arrays** — address calculation in row-major and column-major order ⚑ (a recurring exam
  formula question), sparse matrix representation, insertion/deletion cost analysis.
- **Linked lists ⚑** — singly, doubly, circular, circular doubly, with header node;
  insert/delete/search/reverse; find the middle; Floyd's cycle detection; merge two sorted
  lists; array vs linked list comparison table.
- **Stack ⚑** — array and linked implementations; overflow and underflow; applications —
  infix→postfix and infix→prefix conversion, postfix evaluation, parenthesis matching,
  function call stack, undo, backtracking, Tower of Hanoi.
- **Queue** — linear queue and its limitation, circular queue, deque, priority queue;
  queue using two stacks and stack using two queues; applications.
- **Trees** — terminology (root, leaf, degree, height, depth, level, ancestor); types (full,
  complete, perfect, balanced, skewed, degenerate); node-count and height formulas ⚑; array
  vs linked representation; traversals preorder/inorder/postorder/level-order, recursive and
  iterative ⚑; **reconstructing a tree from two traversals** ⚑; expression trees; threaded
  binary trees.
- **BST** — insert, search, delete (all three cases) ⚑; successor and predecessor;
  validation; kth smallest; worst-case degradation to a linked list.
- **Balanced & multiway trees** — AVL balance factor and LL/RR/LR/RL rotations with worked
  diagrams ⚑; red-black tree properties; B-tree; B+ tree and why databases use it;
  2-3 trees.
- **Heaps ⚑** — min and max heap, array representation and parent/child index formulas,
  heapify, build-heap, insert and extract, heap sort, priority queue implementation.
  (The 07/02/2025 paper asked for an array→min-heap conversion with step diagrams.)
- **Hashing ⚑** — hash function design, load factor, collision resolution by chaining and by
  open addressing (linear probing, quadratic probing, double hashing), primary and secondary
  clustering, rehashing, comparison table.
- **Graphs ⚑** — terminology; adjacency matrix vs adjacency list vs incidence matrix with
  space complexity; BFS and DFS with traversal-order questions, complexity and applications;
  connected components; cycle detection; topological sort (Kahn's and DFS-based); bipartite
  checking; spanning trees; MST by Kruskal and Prim; shortest path by Dijkstra,
  Bellman-Ford, Floyd-Warshall; strongly connected components.
- **Tries and disjoint sets** — trie insert/search, union by rank, path compression.
- **Searching** — linear, binary (iterative and recursive, on rotated arrays),
  interpolation, jump, ternary; complexity comparison.
- **Sorting ⚑** — bubble, selection, insertion, merge, quick (partition schemes, worst
  case), heap, counting, radix, bucket, shell; stability, in-place and adaptive properties;
  full time/space comparison table; which algorithm to choose when; step-by-step trace
  questions.
- **Lower bounds** — the Ω(n log n) comparison-sort bound.

---

## 4. Algorithms

**From your topics list:** asymptotic notation analysis, Master theorem, divide and conquer,
dynamic programming, greedy approach, Kruskal, Prim, Dijkstra, DFS, BFS, knapsack.

**Added coverage**

- **Analysis** — formal definitions of Big-O, Ω, Θ, little-o and little-ω; growth-rate
  ordering ⚑; loop and nested-loop analysis; space complexity; amortized analysis
  (aggregate, accounting, potential).
- **Recurrences ⚑** — substitution method, recursion tree, Master theorem with all three
  cases worked, and cases where the Master theorem does not apply.
- **Divide and conquer** — binary search, merge sort, quick sort, Strassen's matrix
  multiplication, closest pair of points, maximum subarray.
- **Greedy ⚑** — greedy-choice property and optimal substructure; activity selection;
  fractional knapsack; Huffman coding with a worked tree and code table; job sequencing with
  deadlines; coin change and when greedy fails.
- **Dynamic programming ⚑** — overlapping subproblems, memoization vs tabulation; 0/1
  knapsack with the full DP table; longest common subsequence with traceback; longest
  increasing subsequence; matrix chain multiplication; edit distance; coin change; rod
  cutting; subset sum; 0/1 vs fractional knapsack contrast.
- **Backtracking** — N-queens, Sudoku, subsets and permutations, rat in a maze, graph
  colouring, Hamiltonian cycle; branch and bound introduction.
- **Graph algorithms ⚑** — shortest-path comparison table (BFS vs Dijkstra vs Bellman-Ford
  vs Floyd-Warshall), handling negative edges, MST correctness intuition, max flow
  (Ford-Fulkerson) introduction.
- **String algorithms** — naive matching, KMP with LPS array construction, Rabin-Karp,
  Boyer-Moore introduction.
- **Number-theoretic** — Euclidean and extended Euclidean GCD, modular exponentiation,
  sieve of Eratosthenes, primality testing.
- **Complexity classes ⚑** — P, NP, NP-hard, NP-complete; reductions; canonical examples
  (SAT, TSP, clique, vertex cover, subset sum); the halting problem; approximation and
  randomized algorithms.

---

## 5. Database

**From your topics list:** keys, normalization, indexing, file vs database, data models, ER
diagram, DBMS deadlock, RAID, ACID properties, trigger, DDL and DML, integrity rules;
SQL — join, natural join, `HAVING`, `GROUP BY`, `ORDER BY`, `IN`, `ANY`, `BETWEEN`, `ALL`,
`NOT NULL`.

**Added coverage**

- **Fundamentals** — data vs information; DBMS vs file system full comparison ⚑; database
  users and DBA responsibilities; three-schema architecture; logical and physical data
  independence; instance vs schema.
- **ER modelling ⚑** — entity types; attribute types (simple, composite, derived,
  multivalued, key); relationships, degree, cardinality ratios, participation constraints;
  weak entities; generalization, specialization, aggregation; ER-to-relational mapping
  rules; EER.
- **Relational model ⚑** — relation, tuple, attribute, domain, degree, cardinality; key
  types — super, candidate, primary, alternate, composite, foreign, surrogate; integrity
  constraints — domain, entity, referential, key; NULL semantics.
- **Relational algebra** — selection, projection, union, difference, cartesian product,
  rename; join family (theta, equi, natural, outer left/right/full, semi, anti); division;
  tuple and domain relational calculus.
- **SQL ⚑** — DDL, DML, DCL, TCL; `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`, `LIMIT`;
  operators `IN`, `BETWEEN`, `LIKE`, `ANY`, `ALL`, `EXISTS`, `DISTINCT`, `NOT NULL`;
  aggregate functions; every join type with sample output; correlated vs non-correlated
  subqueries; set operations; views and updatable views; indexes; sequences; constraints;
  window functions; **writing queries from a given schema** ⚑.
- **Normalization ⚑** — functional dependency, Armstrong's axioms, attribute closure,
  deriving candidate keys from FDs, canonical cover; insert/update/delete anomalies; 1NF,
  2NF (partial dependency), 3NF (transitive dependency), BCNF, 4NF (multivalued dependency),
  5NF; lossless join and dependency preservation; denormalization.
  (The 07/02/2025 paper asked for decomposition, key identification and the normal form.)
- **Transactions ⚑** — ACID with worked definitions, transaction states, schedules, conflict
  and view serializability, precedence graphs, recoverable and cascadeless schedules.
- **Concurrency control** — shared and exclusive locks; two-phase locking (basic, strict,
  rigorous); DBMS deadlock detection via wait-for graph, prevention via wait-die and
  wound-wait; timestamp ordering; multiversion; optimistic concurrency control.
- **Recovery** — log-based recovery (deferred and immediate update), write-ahead logging,
  checkpoints, shadow paging, ARIES introduction.
- **Storage & indexing ⚑** — file organization (heap, sequential, hash, clustered); primary,
  secondary and clustering indexes; dense vs sparse; multilevel indexes; B-tree vs B+ tree
  indexing; static, dynamic and extendible hashing; query optimisation basics.
- **RAID ⚑** — levels 0, 1, 2, 3, 4, 5, 6 and 10 with diagrams; striping, mirroring, parity;
  fault tolerance and usable-capacity calculations.
- **Programmability** — stored procedures, functions, triggers (row vs statement, before vs
  after) ⚑, cursors, PL/SQL basics.
- **Analytics** — data warehouse, OLTP vs OLAP comparison ⚑, star vs snowflake schema, ETL,
  data mining introduction.
- **NoSQL & distributed** — key-value, document, column-family and graph stores; CAP
  theorem ⚑; BASE vs ACID; sharding; replication; distributed databases.
- **Security** — database access control, SQL injection and prevention, encryption, auditing.

---

## 6. OOP (Java)

**From your topics list:** encapsulation, inheritance, polymorphism, overloading and
overriding, `throw` and `throws`, exception handling, JAR, JRE, WAR, JDK, .NET framework,
Java output problems.

**Added coverage**

- **Concepts** — class and object, abstraction, procedural vs object-oriented comparison ⚑,
  advantages of OOP, message passing, coupling and cohesion in OOP terms.
- **Java platform ⚑** — JDK vs JRE vs JVM (comparison and diagram), bytecode, platform
  independence, JIT compiler, class loader, `main` method signature, primitive vs reference
  types, wrapper classes, autoboxing, type casting.
- **Access & keywords** — the four access modifiers as a visibility matrix ⚑; `static`
  (variable, method, block, nested class); `final` (variable, method, class); `this`,
  `super`, `instanceof`, `transient`, `volatile`, `synchronized`, `abstract`.
- **Constructors** — default, parameterized, copy; constructor chaining; constructor vs
  method comparison.
- **Inheritance ⚑** — single, multilevel, hierarchical; why Java forbids multiple
  inheritance (the diamond problem) and how interfaces work around it; IS-A vs HAS-A;
  composition vs inheritance.
- **Polymorphism ⚑** — compile-time (overloading rules and ambiguity) vs runtime
  (overriding rules, covariant returns, dynamic method dispatch); **overloading vs
  overriding comparison table** — a repeat question.
- **Abstraction ⚑** — abstract class vs interface full comparison; default and static
  interface methods; functional and marker interfaces.
- **Exception handling ⚑** — the `Throwable` hierarchy; checked vs unchecked; `try`,
  `catch`, `finally`, multi-catch, try-with-resources; `throw` vs `throws` comparison;
  custom exceptions; `finally` vs `finalize`; common runtime exceptions.
- **Strings** — immutability and why; `String` vs `StringBuffer` vs `StringBuilder` ⚑;
  string constant pool; `==` vs `equals`; the `equals`/`hashCode` contract.
- **Collections framework ⚑** — the hierarchy; `List` (ArrayList, LinkedList, Vector), `Set`
  (HashSet, LinkedHashSet, TreeSet), `Map` (HashMap, LinkedHashMap, TreeMap, Hashtable,
  ConcurrentHashMap), `Queue`/`Deque`; ArrayList vs LinkedList; HashMap vs Hashtable;
  HashMap internal working; Iterator vs ListIterator; fail-fast vs fail-safe; `Comparable`
  vs `Comparator`; generics, bounded types and wildcards.
- **Multithreading** — thread lifecycle diagram, `Thread` vs `Runnable`, `start` vs `run`,
  synchronization, synchronized method vs block, `wait`/`notify`/`notifyAll`, `sleep` vs
  `wait` ⚑, deadlock, executor and thread pools.
- **Memory & GC** — stack vs heap, garbage collection (mark and sweep, generational),
  memory leaks in Java.
- **I/O & serialization** — byte vs character streams, serialization and deserialization,
  `transient`.
- **Java 8+** — lambdas, streams, `Optional`, method references.
- **Packaging ⚑** — JAR vs WAR vs EAR comparison (asked directly), classpath.
- **.NET** — CLR, CTS, CLS, MSIL, assemblies; .NET vs JVM comparison ⚑.
- **Design** — singleton, factory, abstract factory, builder, observer, strategy, DAO, MVC;
  SOLID principles.
- **Output problems ⚑** — inheritance and overriding traces, static vs instance
  initialisation order, string comparison puzzles, exception flow puzzles.

---

## 7. Data Communication and Networking

**From your topics list:** Forouzan chapters 1–8, hub, switch, router, repeater, IPv4 and
IPv6, subnet masking, NAT, switching, routing protocol algorithms, all application layer
protocol details, TCP, UDP, FTP, HTTPS.

**Added coverage**

- **Fundamentals** — components of data communication, data flow (simplex, half duplex, full
  duplex) ⚑, network criteria, topologies (bus, star, ring, mesh, hybrid) with link-count
  and cable-requirement formulas ⚑, network types PAN/LAN/MAN/WAN, client-server vs
  peer-to-peer, internet vs intranet vs extranet ⚑, ISP hierarchy.
- **Reference models ⚑** — OSI seven layers with the function, PDU and devices of each;
  TCP/IP model; OSI vs TCP/IP comparison; encapsulation and decapsulation.
- **Physical layer** — analog vs digital signals, amplitude/frequency/phase, bandwidth, bit
  rate vs baud rate ⚑, transmission impairments (attenuation, distortion, noise), decibel
  calculations, guided media (UTP/STP categories, coaxial, fibre) and unguided media (radio,
  microwave, infrared, satellite), performance metrics.
- **Delay & latency math ⚑** — propagation, transmission, queuing and processing delay;
  total latency and round-trip time; bandwidth-delay product; throughput and efficiency.
  (The 07/02/2025 paper asked for a full Dhaka–Rangpur latency computation.)
- **Digital transmission** — line coding (unipolar, polar NRZ-L and NRZ-I, RZ, Manchester,
  differential Manchester, bipolar AMI, B8ZS, HDB3) ⚑, block coding, scrambling, PCM
  (sampling, quantization, encoding), delta modulation, serial vs parallel, synchronous vs
  asynchronous transmission.
- **Analog transmission** — ASK, FSK, PSK, BPSK, QPSK, QAM with constellation diagrams and
  bandwidth requirements; AM, FM, PM; modem operation.
- **Multiplexing & spreading** — FDM, WDM, synchronous and statistical TDM with frame math,
  FHSS, DSSS; CDMA vs TDMA vs FDMA comparison ⚑.
- **Switching ⚑** — circuit switching, packet switching (datagram vs virtual circuit),
  message switching, comparison table.
- **Data link layer ⚑** — framing with character and bit stuffing; **error detection and
  correction** — parity, two-dimensional parity, checksum (worked), CRC polynomial division
  (worked), Hamming code encode and single-error correction (worked); flow control —
  stop-and-wait, Go-Back-N, Selective Repeat with timeline diagrams and efficiency formulas;
  sliding window; piggybacking; HDLC and PPP.
- **Medium access ⚑** — pure and slotted ALOHA with efficiency, CSMA variants, CSMA/CD with
  minimum-frame-size math, CSMA/CA, token passing, polling; Ethernet standards; MAC
  addressing; ARP and RARP; hub vs switch vs bridge vs router comparison; collision vs
  broadcast domains; VLAN; spanning tree protocol.
- **Network layer ⚑** — IPv4 header fields; address classes A–E; classful vs classless;
  **subnetting worked drills** (subnet mask, number of subnets and hosts, network and
  broadcast addresses, valid host range); VLSM; CIDR and supernetting; private address
  ranges; NAT and PAT; IPv6 header, address types, notation and transition mechanisms
  (dual stack, tunnelling, translation); IPv4 vs IPv6 comparison table; fragmentation and
  MTU; ICMP; IGMP; DHCP; routing — static vs dynamic, distance vector (RIP, count-to-infinity,
  split horizon), link state (OSPF), path vector (BGP); reading a routing table; unicast,
  multicast, broadcast and anycast.
- **Transport layer ⚑** — process-to-process delivery, ports and sockets; UDP header and use
  cases; TCP header fields, three-way handshake and connection termination, sequence and
  acknowledgement numbers, sliding window, flow control; congestion control (slow start,
  congestion avoidance, fast retransmit and fast recovery; Tahoe vs Reno vs CUBIC);
  **flow control vs congestion control comparison** ⚑ (asked on 04/10/2024); TCP vs UDP
  table.
- **Application layer ⚑** — DNS hierarchy, iterative vs recursive resolution, record types,
  caching; HTTP methods, status codes, persistent vs non-persistent connections, HTTP/2 and
  HTTP/3; HTTPS and the TLS handshake; FTP control and data connections, active vs passive;
  TFTP; **SMTP, POP3 and IMAP with the sender→mail server→receiver diagram** ⚑ (asked on
  07/02/2025); Telnet vs SSH; SNMP; DHCP; NTP; LDAP; VoIP and SIP; proxies; CDN; cookies and
  sessions.
- **Security & devices** — firewall types (packet filtering, stateful, application proxy,
  next-generation), DMZ, IDS and IPS, VPN (site-to-site vs remote access, IPSec, tunnelling).
- **Wireless & modern** — 802.11 a/b/g/n/ac/ax, Bluetooth, WiMAX, cellular 1G–5G evolution,
  MANET, IoT networking, SDN and NFV, MPLS.

---

## 8. Computer Architecture

**From your topics list:** performance analysis math, floating point, processor design, data
hazards, datapath and datapath math, Intel 8085 and 8086 diagrams and design, addressing
modes, access time, seek time and transfer time, Von Neumann architecture.

**Added coverage**

- **Foundations** — Von Neumann vs Harvard architecture ⚑, stored-program concept,
  functional units, system bus (data, address, control), bus width vs addressable memory,
  register organisation (PC, IR, MAR, MBR, accumulator, general-purpose, flags).
- **Instructions** — instruction cycle (fetch, decode, execute, store); instruction formats
  (zero, one, two and three address) ⚑; instruction set design; **addressing modes** with
  effective-address examples ⚑; machine cycles; micro-operations; hardwired vs
  microprogrammed control; RISC vs CISC comparison ⚑.
- **Arithmetic ⚑** — fixed point representation; signed magnitude, 1's and 2's complement;
  overflow detection; **Booth's multiplication algorithm** worked; restoring and
  non-restoring division; **IEEE 754 single and double precision** encode and decode worked;
  normalization, bias, floating-point arithmetic and rounding.
- **Performance ⚑** — CPU time formula, clock rate, CPI, MIPS, MFLOPS; **Amdahl's law**
  worked; speedup calculations; benchmark comparison problems.
- **Pipelining ⚑** — stage breakdown; speedup, efficiency and throughput formulas worked;
  hazards — structural, data (RAW, WAR, WAW), control; remedies — forwarding, stalling,
  branch prediction (static, dynamic, branch target buffer), delayed branch; superscalar,
  superpipelining, VLIW, instruction-level parallelism.
- **Cache ⚑** — locality of reference; direct, fully associative and set associative mapping
  with **worked address bit-field splits**; **total-bits-required calculation** (asked on
  04/10/2024); replacement policies (LRU, FIFO, LFU, random); write-through vs write-back;
  hit ratio and **AMAT** worked; multilevel caches; cache coherence and MESI.
- **Main & virtual memory ⚑** — memory organisation and interleaving, DRAM refresh; paging,
  page tables, multilevel and inverted page tables, TLB, **effective access time** worked;
  demand paging; segmentation; segmented paging.
- **Secondary storage ⚑** — disk geometry; **access time = seek + rotational latency +
  transfer time** worked; disk scheduling; SSD internals; RAID levels.
- **I/O ⚑** — programmed I/O, interrupt-driven I/O, DMA (cycle stealing vs burst mode),
  I/O processors; interrupt types, handling and priority; daisy chaining; memory-mapped vs
  isolated I/O.
- **Microprocessors ⚑** — 8085 architecture, pin diagram, registers, flags, instruction set
  and timing diagrams; 8086 architecture (BIU and EU), segmentation, registers, addressing
  modes, pin diagram; 8085 vs 8086 comparison; Intel processor evolution.
- **Parallel processing** — Flynn's taxonomy (SISD, SIMD, MISD, MIMD) ⚑, multiprocessor vs
  multicore, shared vs distributed memory, array and vector processors, GPU basics.

---

## 9. Telecommunication

**From your topics list:** analog to digital converter, digital to analog converter,
multiplexer, demultiplexer, flip-flop, sequential circuit, optical fibre, SNR, Shannon's
theorem, Nyquist theorem (sampling), modulation, demodulation, CDMA, TDMA, FDMA.

**Added coverage**

- **Signals** — analog vs digital, sine wave parameters, time vs frequency domain, composite
  signals, bandwidth, harmonics, Fourier basics.
- **Analog-to-digital ⚑** — sampling and the **Nyquist theorem** worked; quantization and
  quantization noise; SNR and SQNR formulas; encoding; **PCM bit-rate calculations**; delta
  modulation, adaptive delta modulation, DPCM.
- **Digital-to-analog ⚑** — **DAC resolution calculation** (asked on 04/10/2024: 12-bit DAC
  over 0–3.3 V); R-2R ladder and weighted-resistor DACs; settling time.
- **Modulation ⚑** — analog (AM, FM, PM with modulation index, bandwidth and power
  distribution); digital (ASK, FSK, PSK, BPSK, QPSK, 8-PSK, QAM with constellation diagrams
  and bit-rate math); pulse modulation (PAM, PWM, PPM); demodulation; modem operation.
- **Channel capacity ⚑** — **Nyquist bit rate** and **Shannon capacity** worked, with and
  without noise; SNR in decibels; bandwidth efficiency; comparison of the two theorems.
- **Multiplexing ⚑** — FDM, synchronous and statistical TDM with frame calculations,
  WDM and DWDM, OFDM; **CDMA (chip codes and orthogonality), TDMA and FDMA comparison**.
- **Combinational logic ⚑** — multiplexers (2:1, 4:1, 8:1) and **implementing Boolean
  functions with a MUX**; demultiplexers; encoders, decoders and priority encoders;
  comparators; half and full adders and subtractors; ripple-carry vs carry-look-ahead
  adders; ALU construction.
- **Sequential logic ⚑** — latches (SR, gated); flip-flops (SR, D, JK, T) with truth,
  characteristic and excitation tables; race-around condition and master-slave; registers
  (SISO, SIPO, PISO, PIPO, universal shift); counters (asynchronous/ripple, synchronous,
  up/down, mod-N, ring, Johnson) with state diagrams; **sequential circuit design** from
  state table and state diagram; Mealy vs Moore ⚑; state reduction; combinational vs
  sequential comparison.
- **Optical fibre ⚑** — structure, total internal reflection, single-mode vs multimode,
  step-index vs graded-index, attenuation and dispersion, advantages over copper,
  connectors and splicing.
- **Wireless & carrier networks** — antenna basics; satellite communication (GEO, MEO, LEO,
  transponder, footprint, uplink and downlink); microwave links; PSTN, ISDN, DSL variants,
  cable modem, SONET/SDH; cellular concepts (cell, frequency reuse, cluster size, handoff);
  1G–5G evolution and comparison ⚑; GSM vs CDMA architecture.

---

## 10. Circuit Analysis

**From your topics list:** DC circuits, types of circuit, Ohm's law, Kirchhoff's law,
clipping and clamping circuits, equivalent resistance, current and voltage, AC circuits,
power factor, Q-factor, diode, Zener diode, transistor.

**Added coverage**

- **DC fundamentals ⚑** — charge, current, voltage, power and energy; Ohm's law; series and
  parallel resistors; **equivalent resistance** including delta-wye (star-delta)
  transformation; voltage and current dividers; **KCL and KVL with worked mesh and nodal
  analysis**; ideal vs practical sources; source transformation.
- **Network theorems ⚑** — superposition, **Thevenin**, **Norton**, maximum power transfer,
  reciprocity, Millman, substitution — each with a worked example.
- **Energy storage** — capacitors and inductors, series and parallel combination, stored
  energy; **RC and RL transients** with charging/discharging equations and time constant;
  RLC natural and step response.
- **AC analysis ⚑** — sinusoids; RMS, average and peak values; form factor and peak factor;
  phasors; impedance, admittance and reactance; R, L, C and combinations under AC; series
  and parallel RLC; **resonance** (resonant frequency, bandwidth, **Q-factor**); power in AC
  (real, reactive, apparent, power triangle); **power factor and correction**; three-phase
  basics (star and delta, line vs phase quantities).
- **Diodes ⚑** — PN junction, forward and reverse bias, V-I characteristics, ideal vs
  practical; **rectifiers** (half-wave, full-wave centre-tap, bridge) with ripple factor,
  efficiency and PIV; filters (capacitor, LC, pi); **clipper circuits** (series, shunt,
  biased) and **clamper circuits** (positive, negative, biased) with output waveforms;
  **Zener diode** breakdown and voltage-regulator design with worked math; special diodes
  (LED, photodiode, varactor, Schottky, tunnel).
- **Transistors ⚑** — BJT (NPN and PNP, regions of operation, CB/CE/CC configurations and
  characteristics, α, β and γ relations); **biasing** (fixed, collector-to-base, voltage
  divider), load line and Q-point, bias stability; FET and MOSFET (JFET, enhancement and
  depletion MOSFET, characteristics, comparison with BJT); transistor as a switch and as an
  amplifier; amplifier classes A, B, AB and C.
- **Operational amplifiers** — ideal characteristics, virtual ground; inverting and
  non-inverting gain; summing, difference, integrator, differentiator, comparator and
  voltage follower; CMRR and slew rate.
- **Logic families** — RTL, DTL, TTL, ECL, CMOS comparison; fan-in and fan-out, noise
  margin, propagation delay, power dissipation.
- **Measurement** — multimeter, oscilloscope basics, Wheatstone bridge.

---

## 11. Operating System

**From your topics list:** memory management, processor management, batch OS, time-sharing
OS, distributed OS, network OS, real-time OS, resource management, multitasking,
multiprogramming, spooling, process, thread, schedulers, deadlock, FCFS, SJN, priority,
shortest remaining time, round robin, banker's algorithm, page fault algorithms (FIFO, LRU,
optimal).

**Added coverage**

- **Fundamentals** — OS functions, OS as resource manager and extended machine; kernel vs
  shell; kernel types (monolithic, microkernel, hybrid, exokernel) ⚑; system calls and their
  categories; user mode vs kernel mode and dual-mode operation; booting; OS structures
  (simple, layered, modular, virtual machine).
- **OS types ⚑** — batch, multiprogramming, multitasking/time-sharing, multiprocessing,
  distributed, network, real-time (hard vs soft), embedded, mobile, clustered — with a
  comparison table; **spooling vs buffering**.
- **Processes & threads ⚑** — process vs program; PCB contents; **process state diagram**;
  context switching; process creation (`fork`, `exec`, `wait`, `exit`); zombie and orphan
  processes; threads (user-level vs kernel-level, many-to-one, one-to-one and many-to-many
  models); **process vs thread comparison**; benefits of multithreading.
- **CPU scheduling ⚑** — scheduling criteria (CPU utilisation, throughput, turnaround,
  waiting, response time); preemptive vs non-preemptive; long, medium and short-term
  schedulers; dispatcher and dispatch latency; **FCFS, SJF, SRTF, priority (with aging),
  round robin, multilevel queue and multilevel feedback queue — every one with a worked
  Gantt chart and average waiting and turnaround times**; convoy effect; starvation;
  effect of time-quantum size.
- **Synchronization ⚑** — race conditions; the critical-section problem and its three
  requirements; Peterson's solution; hardware support (test-and-set, swap); semaphores
  (binary and counting); **mutex vs semaphore**; monitors; classic problems —
  producer-consumer, readers-writers, dining philosophers, sleeping barber; priority
  inversion.
- **Deadlock ⚑** — the four Coffman conditions; **is single-process deadlock possible**
  (asked on 04/10/2024); resource allocation graphs with single and multiple instances;
  prevention by attacking each condition; avoidance via safe states and the **banker's
  algorithm with worked need matrix and safe sequence** (asked on 07/02/2025); detection via
  wait-for graph; recovery by preemption, rollback or termination; deadlock vs starvation.
- **Memory management ⚑** — logical vs physical addresses, MMU, address binding; swapping;
  contiguous allocation with **first fit, best fit and worst fit worked**; internal vs
  external fragmentation; compaction; **paging** (page table, frame, address translation
  worked, TLB and **effective access time**, multilevel and inverted page tables, shared
  pages); **segmentation**; segmented paging; **paging vs segmentation comparison**.
- **Virtual memory ⚑** — demand paging; page-fault handling steps and service time;
  **page replacement traces for FIFO (with Belady's anomaly), optimal and LRU, with hit and
  fault counts**; second-chance and clock approximations; LFU and MFU; frame allocation
  (equal, proportional, global vs local); thrashing and the working-set model.
- **File systems ⚑** — file attributes and operations; access methods (sequential, direct,
  indexed); directory structures (single-level, two-level, tree, acyclic graph, general
  graph); **allocation methods** (contiguous, linked, indexed) with comparison; free-space
  management (bit vector, linked list, grouping); inode structure; FAT vs NTFS vs ext;
  journaling; mounting; file protection and ACLs.
- **Disk & I/O ⚑** — disk structure; **disk scheduling — FCFS, SSTF, SCAN, C-SCAN, LOOK,
  C-LOOK with worked total head movement**; formatting and bad blocks; RAID levels;
  programmed I/O, interrupts, DMA, device drivers, blocking vs non-blocking I/O, buffering,
  caching.
- **Protection & security** — protection goals, domains, access matrix, ACL vs capability
  list, authentication, OS-level threats.
- **Virtualization** — type 1 vs type 2 hypervisors, containers vs virtual machines.
- **Linux ⚑** — filesystem hierarchy; **permissions and `chmod` in numeric and symbolic
  form**; essential commands (`ls`, `cd`, `pwd`, `cp`, `mv`, `rm`, `mkdir`, `cat`, `grep`,
  `find`, `chmod`, `chown`, `ps`, `top`, `kill`, `df`, `du`, `tar`, `ssh`, `sudo`, `apt`,
  `vi`); pipes and redirection; shell scripting basics; process management commands.

---

## 12. Discrete Math and Quantitative

**From your topics list:** propositional logic, predicate logic, tautologies,
contradictions, propositional equivalences, inverse, converse and contrapositive,
quantifiers, NFA, DFA.

**Added coverage**

- **Propositional logic ⚑** — connectives and **truth tables** (the 07/02/2025 paper asked
  for a full truth table of a three-variable expression); tautology, contradiction,
  contingency; logical equivalences (De Morgan, distributive, absorption); implication,
  converse, inverse, contrapositive; rules of inference (modus ponens, modus tollens,
  syllogisms); argument validity; CNF and DNF; satisfiability.
- **Predicate logic** — predicates, universal and existential quantifiers, nested
  quantifiers, negating quantified statements, translating English into logic.
- **Proof techniques ⚑** — direct proof, contraposition, contradiction, **mathematical
  induction** (weak and strong), counterexamples, **pigeonhole principle** (simple and
  generalized).
- **Set theory ⚑** — subsets, power set, cardinality; union, intersection, difference,
  complement, symmetric difference; Venn diagrams; set identities; cartesian product;
  **inclusion-exclusion for two and three sets**. (The 04/10/2024 paper asked for X and Y
  given X∪Y, X∩Y and Y−X.)
- **Relations** — representation by matrix and digraph; reflexive, symmetric, antisymmetric
  and transitive properties; equivalence relations and classes; partial orders, POSETs and
  Hasse diagrams; lattices; closures including Warshall's algorithm.
- **Functions** — injective, surjective, bijective; composition and inverse; floor and
  ceiling; growth of functions.
- **Combinatorics ⚑** — sum and product rules; permutations (with and without repetition,
  circular); combinations; binomial theorem and Pascal's triangle; permutations of identical
  objects; derangements; generating functions.
- **Probability ⚑** — sample space and events; classical and axiomatic definitions; addition
  and multiplication rules; conditional probability; independence; **Bayes' theorem**;
  random variables, expectation and variance; binomial, Poisson and normal distributions;
  **dice, card and ball problems** (the 04/10/2024 paper asked for P(sum = 7) with two dice).
- **Recurrence relations** — formulation; solving linear homogeneous and non-homogeneous
  relations with constant coefficients; characteristic equations; Fibonacci; application to
  algorithm analysis.
- **Graph theory ⚑** — graph types; degree and the handshaking theorem; isomorphism; walks,
  paths and circuits; **Euler and Hamiltonian path/circuit conditions**; planar graphs and
  Euler's formula; graph colouring and chromatic number; trees and their properties;
  spanning-tree counting; bipartite graphs and matching; adjacency and incidence matrices.
- **Boolean algebra ⚑** — postulates and theorems; duality; SOP and POS; minterms and
  maxterms; canonical forms; **simplification by algebra, Karnaugh maps (2–5 variables with
  don't-cares) and Quine-McCluskey**; NAND and NOR as universal gates; gate-level
  implementation and **logic gate minimisation**.
- **Automata ⚑** — alphabets, strings and languages; **DFA design and minimisation**; NFA
  and NFA with ε-moves; **NFA to DFA conversion by subset construction**; regular
  expressions and regular languages; pumping lemma; Moore and Mealy machines; context-free
  grammars and pushdown automata; the Chomsky hierarchy; Turing machines.
- **Number theory ⚑** — divisibility and primes; GCD and LCM; **Euclidean algorithm**;
  modular arithmetic and congruences; Fermat's little theorem; Euler's totient; Chinese
  remainder theorem; **the number theory behind RSA**.
- **Matrices** — operations, determinant, inverse, rank, systems of linear equations,
  eigenvalues.
- **Quantitative aptitude ⚑** — percentage, ratio and proportion, average, time and work,
  time and distance, profit and loss, simple and compound interest, number series, logical
  reasoning, data interpretation.

---

## 13. Software Engineering

**From your topics list:** software development life cycle, data flow diagram, waterfall
model, iterative model, spiral model, V-model, agile model, software testing, black box,
white box, regression testing, use case diagrams.

**Added coverage**

- **Fundamentals** — software characteristics, the software crisis, software myths,
  software engineering layers, quality attributes, software categories, legacy systems.
- **Process models ⚑** — waterfall, incremental, iterative, prototyping (throwaway and
  evolutionary), spiral (risk-driven), V-model, RAD, big bang, **agile** (Scrum roles,
  artifacts and ceremonies; XP; Kanban; Lean), DevOps; **comparison table and when to use
  which**.
- **Requirements engineering ⚑** — functional vs non-functional requirements; elicitation
  techniques; analysis and specification; **SRS structure and IEEE 830**; validation;
  traceability; feasibility study (technical, economic, operational, schedule); user stories
  and acceptance criteria.
- **Analysis & design ⚑** — structured analysis; **DFD context, level-0 and level-1 with
  symbols and balancing rules** (commonly asked to draw); data dictionary; decision tables
  and trees; structure charts; design principles — abstraction, modularity, **cohesion
  (seven types) and coupling (six types) with comparison**, information hiding, refactoring;
  architectural styles (layered, client-server, MVC, microservices, event-driven,
  pipe-and-filter).
- **UML ⚑** — **use case diagram** with actors, include, extend and generalization (asked on
  04/10/2024 for an online purchase system); **class diagram** with association, aggregation,
  composition, inheritance, dependency and multiplicity; sequence, activity, state chart,
  component and deployment diagrams.
- **Design patterns** — creational (singleton, factory, abstract factory, builder,
  prototype); structural (adapter, decorator, facade, proxy, composite); behavioral
  (observer, strategy, command, iterator, state, template); SOLID, DRY, KISS, YAGNI.
- **Implementation** — coding standards; code review, walkthrough vs inspection; pair
  programming; **version control with Git** (commit, branch, merge, rebase, pull request);
  CI/CD pipelines; build automation.
- **Testing ⚑** — verification vs validation; levels (unit, integration — top-down,
  bottom-up and sandwich; system; acceptance — alpha and beta); types (functional,
  performance, load, stress, security, usability, compatibility, smoke, sanity, **regression
  vs retesting**); **black-box techniques** (equivalence partitioning, boundary value
  analysis, decision table, state transition, error guessing); **white-box** (statement,
  branch and path coverage; **cyclomatic complexity worked**; basis path testing); test case
  design and test plans; defect life cycle; severity vs priority; automation; TDD and BDD.
- **Estimation & metrics ⚑** — LOC; **function point analysis worked**; **COCOMO basic,
  intermediate and detailed worked**; Delphi; story points and velocity; product and process
  metrics; Halstead metrics.
- **Project management ⚑** — work breakdown structure; Gantt charts; **PERT and CPM with
  critical path worked**; resource allocation; risk management (identification, RMMM, risk
  exposure); configuration management and change control; QA vs QC; SQA plan; ISO 9001;
  **CMMI levels 1–5**; Six Sigma.
- **Maintenance** — corrective, adaptive, perfective and preventive maintenance; reverse
  engineering; re-engineering; software reuse; technical debt; documentation; software
  ethics, IP and licensing.

---

## 14. Security

**From your topics list:** CIA model, virus, malware, security system, types of virus and
malware, key logger, hacking techniques, SQL injection, DoS and DDoS attacks, encryption
technology.

**Added coverage**

- **Fundamentals ⚑** — the **CIA triad** and AAA (authentication, authorization,
  accounting); non-repudiation; threat vs vulnerability vs risk vs attack; attack surface;
  defence in depth; least privilege; security policy; passive vs active attacks;
  interruption, interception, modification and fabrication.
- **Malware ⚑** — virus families (boot sector, file infector, macro, polymorphic,
  metamorphic, stealth, resident, multipartite); worm; Trojan horse; ransomware; spyware;
  adware; rootkit; **keylogger** (hardware and software); botnet; logic bomb; backdoor;
  cryptojacking; fileless malware; propagation vectors and prevention.
- **Network attacks ⚑** — **DoS and DDoS** (volumetric, protocol and application layer;
  amplification, SYN flood, ping of death, smurf); man-in-the-middle; session hijacking;
  ARP spoofing; IP spoofing; DNS poisoning; sniffing; port scanning; replay; zero-day.
- **Application attacks ⚑** — **SQL injection** with a worked example and prevention by
  prepared statements; XSS (stored, reflected, DOM-based); CSRF; command injection;
  directory traversal; file inclusion; buffer overflow; broken authentication; insecure
  deserialization; the **OWASP Top 10**.
- **Social engineering ⚑** — phishing, spear phishing, whaling, vishing, smishing;
  pretexting; baiting; tailgating; shoulder surfing; dumpster diving; awareness training.
- **Symmetric cryptography ⚑** — classical ciphers (Caesar, Vigenère, Playfair,
  transposition) worked; **DES** structure and weaknesses; 3DES; **AES** rounds and key
  sizes; RC4; block vs stream ciphers; modes of operation (ECB, CBC, CFB, OFB, CTR).
- **Asymmetric cryptography ⚑** — **RSA key generation, encryption and decryption worked**;
  **Diffie-Hellman key exchange worked**; ECC; symmetric vs asymmetric comparison table.
- **Hashing & signatures ⚑** — MD5, SHA-1, SHA-2, SHA-3; one-way and collision-resistance
  properties; HMAC; salting; password storage (bcrypt, PBKDF2); **digital signatures** and
  the signing/verification flow; **digital certificates and X.509**; PKI and CA hierarchy;
  key management.
- **Authentication & access control ⚑** — knowledge, possession and inherence factors;
  password policy; MFA and 2FA; OTP; biometrics (types, FAR and FRR); smart cards; SSO;
  Kerberos; OAuth 2.0 and OpenID Connect; JWT; access control models **DAC, MAC, RBAC and
  ABAC**; access matrix; ACL vs capability list.
- **Network defence ⚑** — **firewall types and architecture**; DMZ; proxy servers; **IDS vs
  IPS** (signature vs anomaly, HIDS vs NIDS); honeypots; SIEM; **VPN and IPSec** (AH, ESP,
  tunnel vs transport mode); **SSL/TLS handshake** and version history; SSH; WPA2 and WPA3;
  network segmentation; **zero trust architecture**; NAC.
- **System & data protection** — OS hardening; patch management; antivirus and EDR; endpoint
  security; data classification; encryption at rest and in transit; DLP; **backup strategies
  (full, incremental, differential; the 3-2-1 rule)**; disaster recovery; **RTO and RPO**;
  business continuity planning.
- **Governance & law ⚑** — **ISO 27001 and ISMS**; NIST Cybersecurity Framework; COBIT;
  **PCI-DSS**; GDPR; **Bangladesh Digital Security Act 2018 and Cyber Security Act 2023**;
  **Bangladesh Bank ICT Security Guideline**; BGD e-GOV CIRT; incident response lifecycle;
  digital forensics and chain of custody; **ethical hacking phases**; vulnerability
  assessment vs penetration testing; red, blue and purple teams; security audit.
- **Emerging** — cloud security and the shared responsibility model; container security;
  IoT security; AI in security and adversarial attacks; the quantum threat and
  post-quantum cryptography.

---

## 15. Other Topics (cross-cutting quick revision)

**From your topics list:** basic computer fundamentals, cloud computing, HTML5, attacks
through the internet, components of a data centre, DNS, CSMA/CD, ICT, modem and full duplex,
firewall functionality, half adder, full adder, multiplexer, computer bus, worms and Trojan
horse, internet and extranet, void, OCR, MICR, interpreter and compiler, number conversion,
2G/3G/4G, basic gates, steps to secure a web server, latch and flip-flop, supervised and
unsupervised learning, Linux commands, Boolean expression simplification, combinational and
sequential circuits, register, counter, logic gate minimisation.

**Added coverage**

- **Web technology ⚑** — HTML5 semantic tags, forms and new APIs; **HTML vs HTML5**; CSS and
  JavaScript basics; **web server vs application server**; **steps to secure a web server**;
  web hosting; URL vs URI structure; static vs dynamic websites; **cookies vs sessions**;
  responsive design; REST API basics.
- **Data centre ⚑** — components (servers, storage, networking, power and UPS, cooling, fire
  suppression, physical security); **tier classification I–IV**; colocation; hot and cold
  aisle containment; PUE; Bangladesh's national data centre and Tier-IV facility.
- **Digital logic quick sheet ⚑** — basic and universal gates with truth tables; **Boolean
  simplification and gate minimisation**; half and full adders; MUX and DEMUX; encoders and
  decoders; **latch vs flip-flop**; registers; counters; **combinational vs sequential
  comparison**.
- **Bangladesh ICT landscape ⚑** — a2i, ICT Division, Bangladesh Computer Council, BTRC,
  BASIS; **Digital Bangladesh pillars** and **Smart Bangladesh** (Smart Citizen, Smart
  Economy, Smart Government, Smart Society); national ICT policy; e-governance and e-service
  delivery; union digital centres; submarine cables (SEA-ME-WE-4, 5 and 6); BdREN;
  Right to Information and digital service standards.
- **Miscellaneous repeats** — ICT definition and scope; modem and duplex modes; OCR, OMR,
  MICR and barcode comparison; **interpreter vs compiler vs assembler**; worms vs Trojan;
  internet vs intranet vs extranet; number conversion drills; 2G to 5G; supervised vs
  unsupervised learning; essential Linux commands.

---

## 16. Banking ICT and Bangladesh Context *(added subject)*

Not present in `probable topics.pdf`, but heavily represented in Bangladesh Bank AD (ICT)
papers and interviews. Treat this page as exam-critical.

- **Core banking ⚑** — core banking solution architecture and modules; centralized vs
  decentralized banking; branch banking vs online banking; CBS vendors used in Bangladesh;
  general ledger, CASA, loan and treasury modules.
- **National payment systems ⚑** — **BACH** (BACPS cheque clearing and **BEFTN**); **RTGS**;
  **NPSB**; interbank fund transfer; cheque truncation; settlement cycles; Bangladesh Bank's
  role as settlement authority.
- **Cards & switching ⚑** — card types; issuing vs acquiring bank; card schemes (VISA,
  Mastercard); ATM and POS switch architecture; **ISO 8583 message format**; EMV chip
  technology; PIN handling and HSM; **PCI-DSS** requirements.
- **Mobile financial services ⚑** — bKash, Nagad, Rocket; MFS regulatory framework; agent
  banking model; **e-KYC and NID verification**; digital onboarding; **Bangla QR**;
  interoperability.
- **International banking** — **SWIFT** message types and the SWIFT Customer Security
  Programme; nostro and vostro accounts; trade finance systems; correspondent banking.
- **Digital banking** — internet and mobile app banking; digital-only bank licensing in
  Bangladesh; API and open banking; **the 2016 Bangladesh Bank reserve heist — attack chain,
  control failures and lessons** (a favourite interview and written topic).
- **Security & compliance in banks ⚑** — **Bangladesh Bank ICT Security Guideline** domains;
  IT risk management; information security governance; SOC operations; fraud detection;
  **AML and CFT systems** and transaction monitoring; Basel operational risk and IT; audit
  trails and log retention.
- **Continuity ⚑** — primary and DR site design (hot, warm, cold); **RTO and RPO for
  banking systems**; data replication (synchronous vs asynchronous); BCP drills.
- **Emerging in finance** — blockchain and DLT in banking; **CBDC**; fintech and the
  regulatory sandbox; AI in credit scoring and fraud detection; RPA in banking; cloud
  adoption policy for financial institutions; big data analytics in banking.
- **Policy & sustainability** — **green banking and green IT**; paperless banking;
  financial inclusion through technology; the AD (ICT) role within Bangladesh Bank's
  organogram.

---

## 17. Emerging Technology and Cloud *(added subject)*

Promoted out of "Other Topics" because cloud, AI and blockchain now appear as full questions
rather than one-liners.

- **Cloud computing ⚑** — NIST definition and the five essential characteristics; **IaaS,
  PaaS and SaaS** with examples and a responsibility-split diagram; **public, private,
  hybrid and community** deployment models; major providers; virtualization and **type 1 vs
  type 2 hypervisors**; **containers vs virtual machines**; Docker basics; Kubernetes
  orchestration; serverless and FaaS; migration strategies; CapEx vs OpEx economics; SLAs;
  multi-tenancy; cloud storage types; **shared responsibility model**; vendor lock-in;
  **edge and fog computing**.
- **Big data ⚑** — the five Vs; structured, semi-structured and unstructured data; **Hadoop
  ecosystem** (HDFS, MapReduce, YARN, Hive, Pig, Spark); NoSQL; **data lake vs data
  warehouse**; ETL vs ELT; data pipelines; descriptive, diagnostic, predictive and
  prescriptive analytics; BI tools.
- **AI & machine learning ⚑** — **AI vs ML vs deep learning**; **supervised vs unsupervised
  vs reinforcement learning** with algorithm examples; linear and logistic regression,
  decision tree, random forest, SVM, KNN, K-means, naive Bayes; neural networks (perceptron,
  layers, activation functions, backpropagation); CNN and RNN; NLP and large language
  models; generative AI; train/validation/test split; **overfitting vs underfitting**;
  **confusion matrix with accuracy, precision, recall and F1**; AI ethics and bias.
- **IoT ⚑** — architecture layers; sensors and actuators; protocols (MQTT, CoAP, Zigbee,
  LoRaWAN); IoT platforms; smart city, smart home and smart agriculture applications;
  IoT security challenges.
- **Blockchain ⚑** — distributed ledger concept; block structure and hash chaining;
  **consensus mechanisms** (proof of work, proof of stake, PBFT); public vs private vs
  consortium chains; smart contracts; cryptocurrency vs blockchain; use cases and
  limitations.
- **Frontier** — quantum computing (qubits, superposition, entanglement, quantum supremacy,
  post-quantum cryptography); AR, VR, MR and the metaverse; digital twins; robotics and RPA;
  3D printing; drones; 6G outlook; green and sustainable computing.

---

## 18. Focus Writing

**From your topics list:** Impact of ICT in Banking; Modern Life and Technology; Digital
Bangladesh; Green Banking; Role of Programmer for Creating Digital Bangladesh; Cyber Crime;
Role of Electronic Banking in the Banking Sector; Activity of Foreign Banks in Bangladesh;
Modern Technology and Globalization; E-Commerce and Bangladesh.

**Added coverage**

- **Reusable structure ⚑** — a seven-part template that fits every prompt above:
  hook → definition and scope → global context → **Bangladesh context** → benefits →
  challenges → recommendations → conclusion. Word-count and time allocation guidance.
- **Fact and statistic bank ⚑** — a shared pool of citable material so any essay can be
  supported: internet and mobile penetration, MFS transaction volumes, freelancing and IT
  export earnings, e-commerce market size, a2i and union digital centre reach, Digital
  Bangladesh and Smart Bangladesh milestones, named government initiatives, relevant
  legislation. **Every figure carries its source and year, and is written to be updated.**
- **Language toolkit** — transition and linking phrases; formal register; paragraph openers;
  hedging for contested claims; avoiding memorised-essay tells.
- **Additional likely prompts** — Artificial Intelligence and Employment; Cashless Society;
  Fourth Industrial Revolution and Bangladesh; Data Privacy in the Digital Age; Fintech and
  Financial Inclusion; ICT in Education; Freelancing and the Digital Economy; Cybersecurity
  as National Security; Smart Bangladesh 2041; Blockchain in Public Service.
- **Model answers** — at least three fully written essays showing the template in use, plus
  skeleton outlines for the rest.

---

## Coverage tracking

Tick a subject only when its page covers every bullet above.

| # | Subject | Phase | Page written | Reviewed |
|---|---|---|---|---|
| 1 | Computer Fundamentals | 2 | ☑ | ☑ |
| 2 | C Programming | 2 | ☑ | ☑ |
| 3 | Data Structures | 1 | ☑ | ☑ |
| 4 | Algorithms | 1 | ☑ | ☑ |
| 5 | Database | 2 | ☑ | ☑ |
| 6 | OOP (Java) | 2 | ☑ | ☑ |
| 7 | Networking | 1 | ☑ | ☑ |
| 8 | Computer Architecture | 2 | ☑ | ☑ |
| 9 | Telecommunication | 3 | ☑ | ☑ |
| 10 | Circuit Analysis | 3 | ☑ | ☑ |
| 11 | Operating System | 1 | ☑ | ☑ |
| 12 | Discrete Math and Quantitative | 3 | ☑ | ☑ |
| 13 | Software Engineering | 3 | ☑ | ☑ |
| 14 | Security | 3 | ☑ | ☑ |
| 15 | Other Topics | 3 | ☑ | ☑ |
| 16 | Banking ICT and Bangladesh Context | 3 | ☑ | ☑ |
| 17 | Emerging Technology and Cloud | 3 | ☑ | ☑ |
| 18 | Focus Writing | 3 | ☑ | ☑ |
