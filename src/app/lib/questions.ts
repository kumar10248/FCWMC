import { Question, WeekQuestions, PracticeMode, PassageQuestion, AllQuestionsData } from "../types";

// Module-level debug - this will run when the module is loaded
console.log('=== questions.ts module loaded ===');

const allQuestionsData: AllQuestionsData = {
    module6:[
  {
    "question": "Which of the following best describes the advantage of circuit switching?",
    "options": [
      "It provides a reliable communication channel.",
      "It efficiently handles bursty traffic.",
      "It doesn't waste bandwidth."
    ],
    "explanation": "Circuit switching establishes a dedicated communication path between sender and receiver for the entire duration of the communication session. This dedicated path ensures reliable, consistent communication with guaranteed bandwidth and minimal delay variation, making it ideal for real-time applications like voice calls.",
    "correctAnswer": [0]
  },
  {
    "question": "Choose the one that best describes the disadvantage of circuit switching.",
    "options": [
      "Connection setup delay",
      "Best-effort delivery",
      "Out-of-order delivery"
    ],
    "explanation": "Circuit switching requires establishing a dedicated path before communication can begin. This setup process involves signaling and resource reservation across the network, which introduces delay before actual data transmission starts. This is particularly noticeable in telephone systems where you hear ringing before connection.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following best describes the advantage of packet switching?",
    "options": [
      "Data forwarding mechanism is simple.",
      "Per-packet overhead is low.",
      "It allows multiplexing."
    ],
    "explanation": "Packet switching allows multiple users to share the same network resources simultaneously through multiplexing. Unlike circuit switching where resources are dedicated to one connection, packet switching efficiently utilizes network capacity by interleaving packets from different users on the same links, maximizing network utilization.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following directly communicates with UE (user equipment) in LTE network?",
    "options": [
      "eNodeB",
      "SGW",
      "MME",
      "PGW"
    ],
    "explanation": "eNodeB (evolved Node B) is the base station in LTE networks that provides the radio interface directly with user equipment (smartphones, tablets, etc.). It handles radio resource management, mobility control, and is the first point of contact for all user communications in the LTE architecture.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following acts as an interface between the external Internet and LTE network?",
    "options": [
      "eNodeB",
      "SGW",
      "MME",
      "PGW"
    ],
    "explanation": "PGW (PDN Gateway) serves as the gateway between the LTE network and external packet data networks like the Internet. It provides connectivity to external networks, handles IP address allocation, policy enforcement, and charging functions, making it the exit/entry point for internet traffic.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the name of the process that connects a moving UE from one eNodeB to the other eNodeB without service disconnection?",
    "options": [
      "Handover",
      "Anchoring",
      "Cell coverage"
    ],
    "explanation": "Handover (also called handoff) is the process that allows a mobile device to maintain its connection while moving from the coverage area of one base station (eNodeB) to another. This seamless transition ensures continuous service without dropping calls or losing data connections as users move through the network.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is the name of the process that translates domain names into IP addresses?",
    "options": [
      "IP address allocation",
      "DNS resolution",
      "Initial attachment"
    ],
    "explanation": "DNS (Domain Name System) resolution is the process of converting human-readable domain names (like google.com) into IP addresses (like 142.250.191.14) that computers use to identify and communicate with each other on the internet. This translation is essential for web browsing and internet communication.",
    "correctAnswer": [1]
  },
  {
    "question": "Choose the term that represents saving requested web pages for subsequent use.",
    "options": [
      "Proxying",
      "Caching",
      "Load balancing"
    ],
    "explanation": "Caching is the process of storing frequently accessed web content (pages, images, files) in temporary storage locations closer to users. This reduces loading times, decreases server load, and improves user experience by serving content from cache rather than requesting it from the original server each time.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT related to traffic reduction in LTE network?",
    "options": [
      "Handover",
      "DNS resolution",
      "Proxy forwarding"
    ],
    "explanation": "Handover is a mobility management function that maintains connectivity as users move between cell towers, but it doesn't reduce network traffic. DNS resolution and proxy forwarding can reduce traffic through caching and optimization, while handover focuses on seamless connectivity rather than traffic optimization.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is NOT a benefit of using LTE and WiFi together?",
    "options": [
      "It better supports user mobility.",
      "It provides more bandwidth hence, better throughput.",
      "It reduces operating costs."
    ],
    "explanation": "Using LTE and WiFi together typically increases operating costs rather than reducing them, as operators must maintain both cellular infrastructure and WiFi access points. While this combination improves mobility support and increases available bandwidth through network aggregation, the dual infrastructure increases operational expenses.",
    "correctAnswer": [2]
  },
  {
    "question": "Which software is usually used for network access control in an organizational network?",
    "options": [
      "Firewall",
      "Gateway",
      "Router",
      "Virus checker"
    ],
    "explanation": "A firewall is a network securing software that prevents unauthorized users and dangerous elements from accessing the network. Software firewall acts as a filter for our network which prevents harmful information.",
    "correctAnswer": [0]
  }

],
      
      module2:[
  {
    "question": "The amount of information obtained by knowing the result of a random experiment is the same to the amount of (A)_______ on the result. In the case of tossing coin it is maximized when the coin is (B)_______ and the corresponding amount of information is (C)___ bit.",
    "options": [
      "(A) certainty, (B) fair, (C) 1",
      "(A) certainty, (B) fair, (C) 0",
      "(A) certainty, (B) unfair, (C) 1",
      "(A) uncertainty, (B) fair, (C) 1",
      "(A) uncertainty, (B) unfair, (C) 0"
    ],
    "explanation": "Information theory states that the amount of information obtained from a random experiment equals the amount of uncertainty about the result. For a coin toss, information is maximized when the coin is fair (equal probability of heads and tails), creating maximum uncertainty. A fair coin provides exactly 1 bit of information since there are 2 equally likely outcomes (log₂(2) = 1 bit).",
    "correctAnswer": [3]
  },
  {
    "question": "Suppose that the maximum frequency component of a signal is W [Hz]. According to the sampling theorem, if the sample rate is above or equal to (A)_____, called the Nyquist rate, the original signal can be recovered perfectly. Representing a continuous value requires (B)______ number of bits because the resolution is (B)_______. If we increase the resolution of a quantizer, the distortion is (C)_______ but the information rate will be (D)_______.",
    "options": [
      "(A) W, (B) finite, (C) increased, (D) decreased",
      "(A) W, (B) infinite, (C) decreased, (D) increased",
      "(A) 2W, (B) finite, (C) increased, (D) decreased",
      "(A) 2W, (B) infinite, (C) increased, (D) decreased",
      "(A) 2W, (B) infinite, (C) decreased, (D) increased"
    ],
    "explanation": "The Nyquist sampling theorem requires a sampling rate of at least 2W (twice the maximum frequency) to perfectly recover the original signal. Representing continuous values theoretically requires infinite bits for perfect precision. Increasing quantizer resolution decreases distortion (better approximation) but increases the information rate (more bits needed per sample).",
    "correctAnswer": [4]
  },
  {
    "question": "For wireless communications, we use an electrical device called antenna which converts an electrical current into a(n) (A)_______ and vice versa. A(n) (A)_______ can propagate a long distance with the speed of light. By doing this, we can deliver information wirelessly. Mathematically, we can decompose a signal according to its constituent (B)______ components. The power spectrum of a signal indicates the power distribution of the information bearing signal according to (B)______. Here, the range of non-zero power distribution is called the signal (C)______ and it determines the speed of change in the signal. Remember that this is one resource we need to pay for transferring information. If we increase the (D)______ of the transmit signal, the intensity of the propagated radio wave increases, which implies longer propagation distance and better immunity for non-ideal effects. So, (D)______ is another resource we need to pay.",
    "options": [
      "(A) radio wave, (B) frequency, (C) power, (D) bandwidth",
      "(A) radio wave, (B) frequency, (C) bandwidth, (D) power",
      "(A) radio wave, (B) time, (C) power, (D) bandwidth",
      "(A) acoustic wave, (B) frequency, (C) bandwidth, (D) power",
      "(A) acoustic wave, (B) time, (C) power, (D) bandwidth"
    ],
    "explanation": "Antennas convert electrical current into radio waves and vice versa. Radio waves propagate at the speed of light enabling wireless communication. Signals are decomposed into frequency components, with the power spectrum showing power distribution across frequencies. The bandwidth (range of non-zero power) determines signal variation speed. Increasing transmit power increases radio wave intensity, enabling longer range and better immunity to interference.",
    "correctAnswer": [1]
  },
  {
    "question": "The PSD of the thermal noise is (A)_____. The noise power contained within the bandwidth of W is (B)_____. Using the bandwidth of W is equivalent to use (C)_____ independent samples. Then, the Shannon capacity is given as (D)_____ when the received signal power is P.",
    "options": [
      "(A) N₀/2, (B) N₀W, (C) W, (D) W/2 log₂(1 + 2P/N₀W)",
      "(A) N₀/2, (B) N₀W, (C) 2W, (D) W/2 log₂(1 + 2P/N₀W)",
      "(A) N₀/2, (B) N₀W, (C) 2W, (D) W log₂(1 + P/N₀W)",
      "(A) N₀, (B) N₀W, (C) W, (D) W/2 log₂(1 + P/N₀W)",
      "(A) N₀, (B) 2N₀W, (C) 2W, (D) W log₂(1 + P/N₀W)"
    ],
    "explanation": "Thermal noise has a flat power spectral density (PSD) of N₀/2 watts per Hz. Over bandwidth W, the total noise power is N₀W. By the Nyquist theorem, bandwidth W supports 2W independent samples per second. The Shannon capacity formula is C = W log₂(1 + P/N₀W) where P is signal power and N₀W is noise power.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the right order of processing sequence at the transmitter?",
    "options": [
      "(Channel Encoding) – (Constellation Mapping) – (Waveform Mapping) – (Up Converting & Power Amp)",
      "(Channel Encoding) – (Waveform Mapping) – (Constellation Mapping) – (Up Converting & Power Amp)",
      "(Waveform Mapping) – (Constellation Mapping) – (Channel Encoding) – (Up Converting & Power Amp)",
      "(Constellation Mapping) – (Waveform Mapping) – (Up Converting & Power Amp) – (Channel Encoding)",
      "(Constellation Mapping) – (Channel Encoding) – (Up Converting & Power Amp) – (Waveform Mapping)"
    ],
    "explanation": "The correct transmitter processing sequence is: 1) Channel Encoding (adds error correction codes), 2) Constellation Mapping (maps bits to symbols), 3) Waveform Mapping (converts symbols to analog waveforms), and 4) Up Converting & Power Amplification (shifts to transmission frequency and amplifies). This sequence ensures proper signal preparation from digital data to RF transmission.",
    "correctAnswer": [0]
  },
  {
    "question": "Consider the case where a detection fails but the channel decoder recovers it. The noisy received symbols close to the (A)_______ are very probable to produce bit errors. But, the channel decoder may find that the erroneous bit sequence is not a possible candidate sequence and correct the errors by mapping to the closest (B)_______ sequence. Although such mapping can fail either, such probability vanishes as the information bit size k (C)_____.",
    "options": [
      "(A) original symbols, (B) erroneous, (C) increases",
      "(A) original symbols, (B) possible, (C) decreases",
      "(A) original symbols, (B) possible, (C) increases",
      "(A) boundaries, (B) erroneous, (C) decreases",
      "(A) boundaries, (B) possible, (C) increases"
    ],
    "explanation": "In digital communication systems, received symbols near decision boundaries between constellation points are most likely to cause detection errors. Channel decoders can correct these errors by recognizing that the erroneous bit sequence is not a valid codeword and mapping it to the closest possible (valid) codeword. As the information block size k increases, the probability of decoding failure decreases due to better error correction capability with longer codes.",
    "correctAnswer": [4]
  },
  {
    "question": "Select the correct answer(s).",
    "options": [
      "If we divide the area into many cells and use one base station per each cell, much more power is required.",
      "If users in different cells reuse the same frequency channels, the required bandwidth becomes much reduced.",
      "Supporting many users in a large area by only one transmitter is the power efficient way.",
      "Cellular structure is bandwidth-efficient way to support many users in a large area but is not power-efficient."
    ],
    "explanation": "In cellular systems, frequency reuse across different cells dramatically reduces the total bandwidth requirement since the same frequencies can be used simultaneously in non-adjacent cells. This makes cellular architecture highly bandwidth-efficient for supporting many users across large areas, which is the primary advantage of cellular design.",
    "correctAnswer": [1]
  },
  {
    "question": "The base station selects one among the predetermined (A)_____ based on the (B)_____ and transferring information by using it. This is called (C)_____.",
    "options": [
      "(A) AMC (B) MCS (C) CQI",
      "(A) AMC (B) CQI (C) MCS",
      "(A) MCS (B) AMC (C) CQI",
      "(A) MCS (B) CQI (C) AMC",
      "(A) CQI (B) MCS (C) AMC"
    ],
    "explanation": "In adaptive communications, the base station selects one among predetermined MCS (Modulation and Coding Schemes) based on the CQI (Channel Quality Indicator) reported by the user. This adaptive selection process is called AMC (Adaptive Modulation and Coding), which optimizes transmission parameters based on current channel conditions.",
    "correctAnswer": [3]
  },
  {
    "question": "In frequency division multiple access (FDMA), (A)_____ channels are allocated by dividing frequency. In time division multiple access (TDMA), (B)_____ channels are allocated by dividing time. In code division multiple access (CDMA), typically (C)_____ codes are allocated to users so that each user can use the whole time and bandwidth.",
    "options": [
      "(A) orthogonal (B) orthogonal (C) orthogonal",
      "(A) orthogonal (B) orthogonal (C) quasi-orthogonal",
      "(A) orthogonal (B) quasi-orthogonal (C) orthogonal",
      "(A) quasi-orthogonal (B) orthogonal (C) quasi-orthogonal",
      "(A) quasi-orthogonal (B) quasi-orthogonal (C) quasi-orthogonal"
    ],
    "explanation": "FDMA uses orthogonal frequency channels (non-overlapping frequencies), TDMA uses orthogonal time slots (non-overlapping time periods), and CDMA uses quasi-orthogonal spreading codes. In CDMA, perfect orthogonality is difficult to maintain due to multipath propagation and timing issues, so quasi-orthogonal codes are used, which have low but non-zero cross-correlation.",
    "correctAnswer": [1]
  },
  {
    "question": "Compare the two-user rate region of CDMA, FDMA, and TDMA.",
    "options": [
      "CDMA ≥ FDMA ≥ TDMA",
      "CDMA ≥ TDMA ≥ FDMA",
      "FDMA ≥ CDMA ≥ TDMA",
      "FDMA ≥ TDMA ≥ CDMA",
      "TDMA ≥ FDMA ≥ CDMA"
    ],
    "explanation": "In terms of achievable rate regions for two users, FDMA typically provides the largest rate region because it uses orthogonal frequency separation without interference. TDMA is next, using orthogonal time slots. CDMA has the smallest rate region due to multiple access interference from quasi-orthogonal codes, where users interfere with each other even when using different spreading codes.",
    "correctAnswer": [3]
  }
],
      
      module3:[
  {
    "question": "Which action is better to cope with the so called \"cocktail effect\"?",
    "options": [
      "Shutdown every transmission",
      "Scheduling of transmission (e.g., round-robin way of transmission, allowing only some group of transmitters to transmit, etc)"
    ],
    "explanation": "The cocktail effect refers to interference caused by multiple simultaneous transmissions in wireless networks. Scheduling transmission using methods like round-robin or allowing only specific groups to transmit at certain times reduces interference by coordinating access to the shared wireless medium, rather than shutting down all transmissions which would be counterproductive.",
    "correctAnswer": [1]
  },
  {
    "question": "In a single channel radio network, as the number of communicating pairs increases, it is impossible to support every pair. Which is the better solution for such overwhelming interference scenario?",
    "options": [
      "Shrink the communication distance (such as multi-hop relay)",
      "Make every node \"move\" randomly and wait for the source node to be close to its destination node."
    ],
    "explanation": "Shrinking communication distance through multi-hop relay reduces interference by decreasing transmission power and creating smaller interference zones. This allows more simultaneous communications in different parts of the network, effectively increasing spatial reuse and overall network capacity compared to random movement which is unpredictable and inefficient.",
    "correctAnswer": [0]
  },
  {
    "question": "Why does the cellular system look like as of today?",
    "options": [
      "To handle large amount of interference",
      "To save the power consumption of mobile terminals"
    ],
    "explanation": "Modern cellular systems use hexagonal cell patterns and frequency reuse schemes primarily to manage and minimize interference between different cells. By carefully planning cell layouts and frequency assignments, cellular networks can handle the massive interference that would otherwise occur when millions of users communicate simultaneously in densely populated areas.",
    "correctAnswer": [0]
  },
  {
    "question": "What are the drawbacks to have stationary access points in the wireless network?",
    "options": [
      "Increasing transmission power of mobile terminals.",
      "Frequent handover (switching to a new access point) as mobile terminals move around the service area."
    ],
    "explanation": "Stationary access points require frequent handovers as mobile devices move through the coverage area. Each time a device moves from one access point's coverage to another's, a handover process must occur to maintain connectivity. This creates signaling overhead, potential service interruptions, and complexity in mobility management.",
    "correctAnswer": [1]
  },
  {
    "question": "Increasing the base station density will increase the capacity of the cellular system?",
    "options": [
      "Yes, if the number of mobile terminals is fixed and their demand is fixed.",
      "Yes, even if the number of mobile terminals and their demand increase."
    ],
    "explanation": "Increasing base station density increases capacity only when the user population and their traffic demands remain constant. More base stations mean smaller cells, allowing for better spatial reuse of frequencies. However, if both the number of users and their demands increase proportionally with base station density, the capacity gain may be offset by the increased load.",
    "correctAnswer": [0]
  },
  {
    "question": "Select the two most unique features for the next generation cellular system (5G).",
    "options": [
      "Ultra-dense base stations",
      "mmWave transmission",
      "Long-distance transmission",
      "Frequent handover"
    ],
    "explanation": "5G networks are characterized by ultra-dense base station deployments for better coverage and capacity, and millimeter wave (mmWave) transmission for extremely high data rates. These features enable 5G's key capabilities: enhanced mobile broadband, ultra-reliable low-latency communications, and massive machine-type communications. Long-distance transmission and frequent handover are not unique 5G features.",
    "correctAnswer": [0, 1]
  },
  {
    "question": "The uplink power control is a typical example of radio resource management. When in the two-user case, is it optimal to shut off one of the users?",
    "options": [
      "The target SIR is too high.",
      "One mobile is too close to the base station."
    ],
    "explanation": "In uplink power control, when the target Signal-to-Interference Ratio (SIR) is set too high, it may become impossible for both users to achieve their required quality simultaneously due to interference limitations. In such cases, it's better to shut off one user to allow the other to meet the high SIR requirement, rather than having both users fail to achieve acceptable performance.",
    "correctAnswer": [0]
  },
  {
    "question": "In the distributed power control (DPC) algorithm, who measures the SIR (signal to interference), and reports it to whom?",
    "options": [
      "The base station measures it and report to the mobile terminal.",
      "The mobile terminal measures it and report to the base station."
    ],
    "explanation": "In distributed power control (DPC) algorithm, the base station measures the Signal-to-Interference Ratio (SIR) of the received signals from mobile terminals and reports this measurement back to the respective mobile terminal. The mobile terminal then uses this feedback to adjust its transmission power accordingly. This allows for distributed control where each mobile terminal can independently manage its power based on the SIR feedback from the base station.",
    "correctAnswer": [0]
  },
  {
    "question": "To balance between fairness and throughput-maximization, which objective could be used in packet scheduling?",
    "options": [
      "Maximize the minimum throughput of users",
      "Proportional fairness"
    ],
    "explanation": "Proportional fairness is a widely used objective in packet scheduling that balances fairness and throughput maximization. It ensures that users receive bandwidth proportional to their channel conditions while maintaining some level of fairness. This approach prevents users with poor channel conditions from being completely starved while still allowing the system to achieve good overall throughput.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the most important gain from the packet scheming in the cellular system?",
    "options": [
      "Increasing \"average\" data rate of each user.",
      "Save the power consumption of base stations."
    ],
    "explanation": "Packet scheduling's primary benefit is increasing the average data rate for each user by intelligently allocating resources based on channel conditions, traffic demands, and fairness criteria. By scheduling transmissions when channel conditions are favorable and managing resources efficiently, packet scheduling significantly improves user experience and network efficiency compared to simple round-robin approaches.",
    "correctAnswer": [0]
  }
],
      module4:[
        {
    "question": "For a perfectly uncorrelated (multipath) channel with 2 Tx antennas and 2 Rx antennas, how many paths can we exploit at maximum?",
    "options": [
      "2",
      "1",
      "8", 
      "4",
      "6"
    ],
    "explanation": "In a perfectly uncorrelated multipath channel with 2 Tx antennas and 2 Rx antennas, the maximum number of exploitable paths is 4. This is because each transmit antenna can have independent multipath channels to each receive antenna, creating 2×2 = 4 independent spatial paths that can be exploited for spatial multiplexing or diversity.",
    "correctAnswer": [3]
  },
  {
    "question": "If we have a 2 by 2 MIMO system with modulation scheme of 2 bps/Hz per symbol, what is the achievable maximum spectral efficiency?",
    "options": [
      "8 bps/Hz",
      "2 bps/Hz",
      "1 bps/Hz",
      "4 bps/Hz"
    ],
    "explanation": "For a 2×2 MIMO system with 2 bps/Hz per symbol modulation, the maximum spectral efficiency is 4 bps/Hz. This is calculated as: 2 spatial streams × 2 bps/Hz per symbol = 4 bps/Hz total. Each spatial stream can carry 2 bps/Hz, and with 2 independent streams, the total achievable spectral efficiency is doubled.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the statements is erroneous? (Choose two)",
    "options": [
      "Diversity can be achieved in space, time, and frequency.",
      "Tx diversity can be the same as Rx diversity.",
      "Multi-user MIMO can only be formed when a base station and a user both have multiple antennas at their sides.",
      "Diversity gain can be made by antenna selection.",
      "Alamouti coding is a type of antenna selection."
    ],
    "explanation": "The two erroneous statements are: 1) 'Multi-user MIMO can only be formed when a base station and a user both have multiple antennas at their sides' - Multi-user MIMO only requires multiple antennas at the base station, not necessarily at each user. 2) 'Alamouti coding is a type of antenna selection' - Alamouti coding is a space-time block coding technique, not antenna selection. It uses space-time coding across multiple antennas simultaneously.",
    "correctAnswer": [2, 4]
  },
  {
    "question": "Which of the following does not achieve maximum sum rate?",
    "options": [
      "A",
      "B", 
      "C",
      "D"
    ],
    "explanation": "Based on the water-filling algorithm diagrams shown, option D does not achieve maximum sum rate. The water-filling algorithm allocates power optimally across subcarriers based on channel conditions. Option D shows a suboptimal power allocation that doesn't follow the water-filling principle, resulting in lower sum rate compared to the optimal allocation.",
    "correctAnswer": [3],
    "image":"/images/m4-4.png",
    "imageSize":"large"
  },
  {
    "question": "Given the antenna configuration shown below, if we want to send the signal from the Tx to the Rx, which of the following should have high value for good performance (S is the S parameter)? (Choose two)",
    "options": [
      "S11",
      "S31", 
      "S32",
      "S21"
    ],
    "explanation": "For good transmission performance from Tx to Rx through a duplexer system, S21 and S12 should have high values. S21 represents the forward transmission coefficient (Tx to Rx path), and S12 represents the reverse transmission coefficient. High values for these parameters indicate good signal transmission through the duplexer with minimal loss.",
    "correctAnswer": [1, 2],
    "image":"/images/m4-3.png",
    "imageSize":"large"
  },
  {
    "question": "If antenna gain of 10 dBi was achieved using a single antenna, what would be the ideal gain of an array of antennas under identical conditions if the signal power was boosted by 100 times?",
    "options": [
      "50 dBi",
      "100 dBi",
      "20 dBi", 
      "30 dBi",
      "11 dBi"
    ],
    "explanation": "If the signal power is boosted by 100 times, this represents a 20 dB increase (10 × log10(100) = 20 dB). Adding this to the original antenna gain: 10 dBi + 20 dB = 30 dBi. Therefore, the ideal gain of the antenna array would be 30 dBi.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the statements is erroneous? (Choose two)",
    "options": [
      "The directivity of an antenna is determined by the beamwidth.",
      "Circular array and linear array generate identical radiation patterns.",
      "Radiation pattern can be only controlled by amplitude control.",
      "With very closely spaced receiver antennas (specifically correlated channels for SIMO single-input-multiple-output), an array gain of ≈dB can be achieved.",
      "Array gain can be used to reduce spatial interference for other users."
    ],
    "explanation": "The two erroneous statements are: 1) 'Circular array and linear array generate identical radiation patterns' - Different array geometries produce different radiation patterns due to their spatial configurations. 2) 'Radiation pattern can be only controlled by amplitude control' - Radiation patterns can be controlled by both amplitude and phase control of individual antenna elements, not just amplitude alone.",
    "correctAnswer": [1, 2]
  },
  {
    "question": "Which correctly names the types of antennas shown below?",
    "options": [
      "A: Whip, B: PCB, C: Feedhorn, D: Monopole, E: Dipole",
      "A: Chip, B: Dipole, C: Microstrip, D: Cassegrain, E: Monopole", 
      "A: Monopole, B: Dipole, C: PCB, D: Feedhorn, E: Cassegrain",
      "A: Whip, B: Monopole, C: PCB, D: Dipole, E: Cassegrain"
    ],
    "explanation": "Based on the antenna images shown: A appears to be a monopole antenna (single vertical element), B appears to be a dipole antenna (two-element design), C appears to be a PCB antenna (printed circuit board antenna), D appears to be a feedhorn antenna (horn-shaped), and E appears to be a Cassegrain antenna (parabolic dish with secondary reflector).",
    "correctAnswer": [2],
    "image":"/images/m4-1.png",
    "imageSize":"large"
  },
  {
    "question": "What cannot be the antenna gain for the directed antenna below in dBi?",
    "options": [
      "5 dBi",
      "3 dBi", 
      "6 dBi",
      "12 dBi"
    ],
    "explanation": "For the directional antenna shown with its radiation pattern, 3 dBi would be too low for a directed antenna of this type. Directional antennas typically have gains higher than 3 dBi due to their focusing effect. The other values (5, 6, and 12 dBi) are more realistic for directional antennas depending on their specific design and beamwidth.",
    "correctAnswer": [1],
    "image":"/images/m4-2.png",
    "imageSize":"large"
  },
  {
    "question": "Which of the following is a non-degraded channel?",
    "options": [
      "A",
      "B",
      "C", 
      "D"
    ],
    "explanation": "Based on the channel response diagrams, option C represents a non-degraded channel. A non-degraded channel maintains relatively flat frequency response across the bandwidth without significant attenuation or distortion, while the other options show various forms of channel degradation such as frequency-selective fading or significant attenuation.",
    "correctAnswer": [2],
    "image":"/images/m4-5.png",
    "imageSize":"large"
  }
      ],
    
       module5:[
  
  {
    "question": "Which of the following statements is not correct about LTE OFDM?",
    "options": [
      "OFDM is a parallel transmission method using multiple subcarriers.",
      "1200 subcarriers with 15KHz subcarrier spacing are used when the system bandwidth is 20MHz.",
      "The OFDM symbol length, which is the inverse of the system bandwidth, is 50ns when the system bandwidth is 20MHz.",
      "The cyclic prefix helps to keep the orthogonality among the multiple subcarriers in most typical practical cellular environments."
    ],
    "explanation": "The statement about OFDM symbol length is incorrect. The OFDM symbol length is not the inverse of the system bandwidth. In LTE, the OFDM symbol length is approximately 66.7μs (microseconds), not 50ns (nanoseconds). The symbol length is related to the subcarrier spacing (15 kHz), not the system bandwidth.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following statements is not correct about LTE MCS?",
    "options": [
      "BPSK, QPSK, 16QAM, and 64QAM can be used for each subcarrier in an OFDM symbol.",
      "Turbo code with various code rates is used as the channel code in LTE.",
      "Each LTE MCS is mapped to its own channel quality information index.",
      "The data rate of an LTE MCS is determined by the modulation order."
    ],
    "explanation": "The statement that 'The data rate of an LTE MCS is determined by the modulation order' is incorrect. The data rate of an LTE MCS (Modulation and Coding Scheme) is determined by both the modulation order AND the coding rate, not just the modulation order alone. Higher modulation orders allow more bits per symbol, but the coding rate also affects the effective data rate.",
    "correctAnswer": [3]
  },
  {
    "question": "Select the most appropriate one for the procedure of LTE H-ARQ.",
    "options": [
      "(CQI report) → (Scheduling) → (Data transmission) → (ACK or NACK) → (Retransmission if NACK)",
      "(Data transmission) → (Scheduling) → (CQI report) → (ACK or NACK) → (Retransmission if NACK)",
      "(Scheduling) → (CQI report) → (Data transmission) → (ACK or NACK) → (Retransmission if NACK)",
      "(CQI report) → (Data transmission) → (Scheduling) → (ACK or NACK) → (Retransmission if NACK)"
    ],
    "explanation": "The correct H-ARQ (Hybrid Automatic Repeat Request) procedure in LTE starts with CQI (Channel Quality Indicator) report from the UE, followed by scheduling decision by the base station, then data transmission, then ACK/NACK feedback, and finally retransmission if NACK is received. This sequence ensures proper channel assessment, resource allocation, and error recovery.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of following statements is not correct about LTE frame structure and multiple access?",
    "options": [
      "The basic resource unit is 1ms in time and 12 subcarriers in frequency.",
      "In downlink, orthogonal frequency division multiple access is used.",
      "In uplink, every user transmits with the same transmission power.",
      "In uplink, single carrier frequency division multiple access is used."
    ],
    "explanation": "The statement 'In uplink, every user transmits with the same transmission power' is incorrect. In LTE uplink, users do not transmit with the same power. Power control is used to optimize system performance, manage interference, and compensate for different path losses. Users closer to the base station typically transmit with lower power than users farther away.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the Tx structure is appropriate for the following scheme of SFBC (Space-Frequency-Block-Coding)?",
    "options": [
       {
        "text": "1",
        "image": "/images/op1.png",
        "imageSize": "small"
      },
      {
        "text": "2",
        "image": "/images/op2.png",
        "imageSize": "small"
      },
    ],
    "explanation": "Based on the diagram showing Antenna 1 and Antenna 2 with subcarrier allocation patterns (S0, S1, -S1*, S0*), this represents a 2x2 SFBC (Space-Frequency Block Coding) transmission structure where signals are transmitted across two antennas and two subcarriers with Alamouti-type coding.",
    "correctAnswer": [0],
    "image":"/images/m5-1.png",
    "imageSize":"large"
  },
  {
    "question": "Which of the following statements does not correspond to LTE-Advanced key items?",
    "options": [
      "Uplink diversity utilizing up to 4 antennas.",
      "Peak spectrum efficiency of 20 bps / Hz for downlink, and 30 bps / Hz for uplink.",
      "Coordinated multipoint transmission/reception, called CoMP.",
      "Extension of downlink diversity to 8 antennas.",
      "Further enhancement of downlink MU-MIMO (R10 main issue)."
    ],
    "explanation": "The statement about 'Peak spectrum efficiency of 20 bps / Hz for downlink, and 30 bps / Hz for uplink' is incorrect for LTE-Advanced. The actual peak spectrum efficiency targets for LTE-Advanced are typically 30 bps/Hz for downlink and 15 bps/Hz for uplink, not the values stated in the option.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is incorrect?",
    "options": [
      "A: Transmit diversity (TM2)",
      "B: Closed loop spatial multiplexing (TM3)", 
      "C: CL rank = 1 (TM6)",
      "D: Open loop spatial multiplexing (TM4)"
    ],
    "explanation": "Based on the diagram and your note, option D is incorrect. The diagram shows that position D corresponds to 'Multi-Stream Rank 2-4' under 'Closed Loop' operation with 'High SINR and rich scattering' conditions, which would be closed loop spatial multiplexing, not open loop spatial multiplexing (TM4).",
    "correctAnswer": [3],
    "image":"/images/m5-2.png",
    "imageSize":"large"
  },
  {
    "question": "What is the main reason to have open loop power control?",
    "options": [
      "Fast set-up for initial power level.",
      "Fast support of moving users."
    ],
    "explanation": "The main reason for open loop power control is fast set-up for initial power level. Open loop power control allows quick initial power estimation based on downlink measurements without requiring feedback from the base station, enabling rapid power level establishment when a user first connects or during handovers.",
    "correctAnswer": [0]
  },
  {
    "question": "Why is PF scheduler \"proportionally\" fair?",
    "options": [
      "It prioritizes less received users.",
      "It always gives more chances to users closer to the base station."
    ],
    "explanation": "PF (Proportional Fair) scheduler is 'proportionally' fair because it prioritizes users who have received less service relative to their channel conditions. It balances between maximizing total system throughput and providing fair access to all users by giving higher priority to users with relatively poor recent service history, thus achieving proportional fairness.",
    "correctAnswer": [0]
  }
],
     module1:[
  {
    "question": "What does BW stand for in communication field?",
    "options": [
      "BandWidth",
      "BroadWay",
      "BodyWeight",
      "Business Week"
    ],
    "explanation": "BW stands for BandWidth in the communication field. Bandwidth refers to the range of frequencies or the data transmission capacity of a communication channel, typically measured in Hertz (Hz) for analog signals or bits per second (bps) for digital signals.",
    "correctAnswer": [0]
  },
  {
    "question": "Which are the drawbacks of 1G? (Choose Three)",
    "options": [
      "Large Size Phone",
      "Poor Battery Performance",
      "Expensive Service Fee",
      "Wireless Communication"
    ],
    "explanation": "The main drawbacks of 1G (first-generation) cellular technology included large, bulky phones that were difficult to carry, poor battery performance requiring frequent charging, and expensive service fees that made mobile communication costly. Wireless communication itself was actually the main advantage of 1G, not a drawback.",
    "correctAnswer": [0, 1, 2]
  },
  {
    "question": "Which is the wrong one?",
    "options": [
      "FDMA: Frequency Division Multiple Access",
      "TDMA: Time Division Multiple Access",
      "CDMA: Code Division Multiple Access",
      "SMS: Social Message Service"
    ],
    "explanation": "SMS stands for Short Message Service, not Social Message Service. SMS is a text messaging service that allows users to send short text messages between mobile devices. The other acronyms are correctly defined multiple access techniques used in cellular communications.",
    "correctAnswer": [3]
  },
  {
    "question": "What is a specialized agency of the United Nations (UN), which is responsible for information and communication technology issues?",
    "options": [
      "ITU",
      "3GPP",
      "3GPP2",
      "Verizon"
    ],
    "explanation": "ITU (International Telecommunication Union) is the specialized agency of the United Nations responsible for information and communication technology issues. It coordinates global telecom networks and services, manages radio spectrum allocation, and develops international standards for telecommunications.",
    "correctAnswer": [0]
  },
  {
    "question": "Which are the keywords and key technologies used in 3G cellular systems? (Choose Three)",
    "options": [
      "Smartphone",
      "CDMA",
      "TDMA",
      "MMS"
    ],
    "explanation": "3G cellular systems introduced smartphones as the primary device, utilized CDMA (Code Division Multiple Access) as a key access technology, and enabled MMS (Multimedia Messaging Service) for sending multimedia content. While TDMA was used in earlier generations, CDMA became more prominent in 3G systems.",
    "correctAnswer": [0, 1, 3]
  },
  {
    "question": "According to 3GPP, what is the target data rate for 5G cellular system?",
    "options": [
      "10 Gbps",
      "20 Gbps",
      "30 Gbps",
      "40 Gbps"
    ],
    "explanation": "According to 3GPP specifications, the target peak data rate for 5G cellular systems is 20 Gbps for downlink. This represents a significant improvement over 4G LTE speeds and enables high-bandwidth applications like ultra-high-definition video streaming and advanced IoT applications.",
    "correctAnswer": [1]
  },
  {
    "question": "Which one is not a key technology for 5G system?",
    "options": [
      "NOMA",
      "Many Cell",
      "New Waveform",
      "TDMA"
    ],
    "explanation": "TDMA (Time Division Multiple Access) is not a key technology for 5G systems. TDMA was primarily used in 2G systems. Key 5G technologies include NOMA (Non-Orthogonal Multiple Access), Massive MIMO (Many Cell technology), and New Waveform techniques. 5G systems use more advanced multiple access schemes than the older TDMA approach.",
    "correctAnswer": [3]
  },
  {
    "question": "Which one is an incorrect keyword for 5G system? See the blank of the following sentence. The main targets for 5G (by 2020) are spectral efficiency, peak (a) massive (b), high (c) support, and low transmission (d).",
    "options": [
      "time",
      "connectivity",
      "mobility",
      "delay"
    ],
    "explanation": "The correct sentence should read: 'The main targets for 5G (by 2020) are spectral efficiency, peak connectivity, massive mobility, high reliability support, and low transmission delay.' Therefore, 'time' is the incorrect keyword as it doesn't fit in any of the blanks (a), (b), (c), or (d) in the context of 5G system targets.",
    "correctAnswer": [0]
  }
],
module7:[
  {
    "question": "Which of the following is a guided transmission medium?",
    "options": ["Radio Waves", "Optical Fiber", "Infrared", "Satellite"],
    "explanation": "Optical Fiber is a guided transmission medium that uses light signals to transmit data through a physical cable with a specific path.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT wireless communication?",
    "options": ["Bluetooth", "Satellite TV", "Ethernet LAN", "Wi-Fi"],
    "explanation": "Ethernet LAN uses physical cables for data transmission, making it a wired communication method, not wireless.",
    "correctAnswer": [2]
  },
  {
    "question": "Frequency is measured in:",
    "options": ["Seconds", "Hertz", "Meters", "Volts"],
    "explanation": "Frequency is the number of cycles per second and is measured in Hertz (Hz), named after Heinrich Hertz.",
    "correctAnswer": [1]
  },
  {
    "question": "Bandwidth of AM is equal to:",
    "options": ["fm", "2fm", "3fm", "4fm"],
    "explanation": "The bandwidth of Amplitude Modulation (AM) is twice the maximum frequency of the modulating signal (2fm).",
    "correctAnswer": [1]
  },
  {
    "question": "Which modulation provides the best noise immunity?",
    "options": ["AM", "FM", "ASK", "PAM"],
    "explanation": "Frequency Modulation (FM) provides better noise immunity compared to AM because noise primarily affects amplitude, not frequency.",
    "correctAnswer": [1]
  },
  {
    "question": "In Phase Shift Keying (PSK), the parameter varied is:",
    "options": ["Amplitude", "Frequency", "Phase", "Bandwidth"],
    "explanation": "In Phase Shift Keying (PSK), the phase of the carrier signal is varied to represent different data bits.",
    "correctAnswer": [2]
  },
  {
    "question": "QAM is a combination of:",
    "options": ["AM + FM", "ASK + FSK", "ASK + PSK", "AM + PCM"],
    "explanation": "Quadrature Amplitude Modulation (QAM) combines Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK).",
    "correctAnswer": [2]
  },
  {
    "question": "Which modulation technique is used in FM radio?",
    "options": ["AM", "FM", "PSK", "QAM"],
    "explanation": "FM radio uses Frequency Modulation (FM) technique where the frequency of the carrier is varied according to the audio signal.",
    "correctAnswer": [1]
  },
  {
    "question": "GSM mobile systems mainly use:",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "GSM (Global System for Mobile Communications) primarily uses Time Division Multiple Access (TDMA) for separating users.",
    "correctAnswer": [1]
  },
  {
    "question": "3G mobile systems mainly use:",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "3G mobile systems primarily use Code Division Multiple Access (CDMA) technology for user separation.",
    "correctAnswer": [2]
  },
  {
    "question": "Which multiple access technique uses orthogonal subcarriers?",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) uses orthogonal subcarriers to separate users efficiently.",
    "correctAnswer": [3]
  },
  {
    "question": "Soft Handover is used in:",
    "options": ["GSM", "CDMA", "FDMA", "LTE"],
    "explanation": "Soft handover is a characteristic feature of CDMA systems where a mobile can be connected to multiple base stations simultaneously.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT a digital modulation scheme?",
    "options": ["ASK", "FSK", "PSK", "FM"],
    "explanation": "FM (Frequency Modulation) is an analog modulation technique, while ASK, FSK, and PSK are digital modulation schemes.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following is used in Wi-Fi and 4G LTE?",
    "options": ["QAM", "AM", "FM", "PCM"],
    "explanation": "Quadrature Amplitude Modulation (QAM) is widely used in modern communication systems like Wi-Fi and 4G LTE for high data rates.",
    "correctAnswer": [0]
  },
  {
    "question": "Pulse Code Modulation (PCM) is:",
    "options": ["Analog Modulation", "Digital Pulse Modulation", "Frequency Modulation", "Phase Modulation"],
    "explanation": "PCM is a digital pulse modulation technique that converts analog signals into digital form through sampling, quantization, and encoding.",
    "correctAnswer": [1]
  },
  {
    "question": "Which is NOT an advantage of digital signals?",
    "options": ["High noise immunity", "Easy storage", "Costlier than analog", "Reliable processing"],
    "explanation": "Digital signals being costlier than analog is actually a disadvantage, not an advantage of digital systems.",
    "correctAnswer": [2]
  },
  {
    "question": "Which frequency band is used for microwave communication?",
    "options": ["3 Hz – 30 Hz", "1 GHz – 300 GHz", "3 MHz – 30 MHz", "30 Hz – 300 Hz"],
    "explanation": "Microwave communication uses frequencies in the range of 1 GHz to 300 GHz for point-to-point communication.",
    "correctAnswer": [1]
  },
  {
    "question": "Frequency reuse in cellular networks improves:",
    "options": ["Antenna size", "Noise level", "Spectrum efficiency", "Modulation index"],
    "explanation": "Frequency reuse allows the same frequencies to be used in different cells, significantly improving spectrum efficiency.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is NOT a pulse modulation technique?",
    "options": ["PAM", "PWM", "PPM", "FM"],
    "explanation": "FM (Frequency Modulation) is not a pulse modulation technique. PAM, PWM, and PPM are all pulse modulation methods.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following devices is part of a Mobile Station (MS)?",
    "options": ["BTS", "BSC", "SIM Card", "MSC"],
    "explanation": "A Mobile Station (MS) consists of Mobile Equipment (ME) and SIM card. BTS, BSC, and MSC are network infrastructure components.",
    "correctAnswer": [2]
  },
  {
    "question": "Twisted Pair Cable consists of:",
    "options": ["One copper wire", "Two copper wires twisted together", "Coaxial conductor", "Optical core"],
    "explanation": "Twisted pair cable consists of two copper wires twisted together to reduce electromagnetic interference and crosstalk.",
    "correctAnswer": [1]
  },
  {
    "question": "UTP cable is mostly used in:",
    "options": ["LAN", "WAN", "Satellite", "Wi-Fi"],
    "explanation": "Unshielded Twisted Pair (UTP) cable is primarily used in Local Area Networks (LAN) for Ethernet connections.",
    "correctAnswer": [0]
  },
  {
    "question": "Which cable provides highest data transfer speed?",
    "options": ["Twisted Pair", "Coaxial", "Optical Fiber", "Radio Wave"],
    "explanation": "Optical fiber provides the highest data transfer speed among guided media due to its use of light signals.",
    "correctAnswer": [2]
  },
  {
    "question": "Optical fiber core is made of:",
    "options": ["Copper", "Plastic or glass", "Aluminum", "Steel"],
    "explanation": "The core of optical fiber is made of high-quality glass or plastic that allows light to travel through with minimal loss.",
    "correctAnswer": [1]
  },
  {
    "question": "Which unguided medium requires line-of-sight?",
    "options": ["Radio Wave", "Microwave", "Infrared", "Satellite"],
    "explanation": "Microwave communication requires a clear line-of-sight path between transmitter and receiver due to its high frequency characteristics.",
    "correctAnswer": [1]
  },
  {
    "question": "Infrared waves cannot:",
    "options": ["Pass through walls", "Be used in remotes", "Work at short range", "Transmit in free space"],
    "explanation": "Infrared waves cannot pass through solid objects like walls, which limits their use to line-of-sight applications.",
    "correctAnswer": [0]
  },
  {
    "question": "Frequency of FM radio lies in:",
    "options": ["30–300 KHz", "535–1605 KHz", "88–108 MHz", "1–300 GHz"],
    "explanation": "FM radio broadcasts in the VHF band, specifically in the frequency range of 88-108 MHz.",
    "correctAnswer": [2]
  },
  {
    "question": "Bandwidth of AM =",
    "options": ["fm", "2fm", "4fm", "fm/2"],
    "explanation": "The bandwidth of Amplitude Modulation is twice the maximum frequency of the modulating signal (2fm).",
    "correctAnswer": [1]
  },
  {
    "question": "Carson's Rule is used to calculate bandwidth in:",
    "options": ["AM", "FM", "PM", "ASK"],
    "explanation": "Carson's Rule is specifically used to estimate the bandwidth required for Frequency Modulation (FM) signals.",
    "correctAnswer": [1]
  },
  {
    "question": "Digital modulation technique used in Bluetooth:",
    "options": ["ASK", "FSK", "PSK", "QAM"],
    "explanation": "Bluetooth uses Frequency Shift Keying (FSK) as its digital modulation technique for data transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "QAM uses:",
    "options": ["One carrier", "Two carriers 90° out of phase", "Multiple antennas", "Optical fiber"],
    "explanation": "QAM uses two carrier signals that are 90° out of phase (quadrature) to carry information in both amplitude and phase.",
    "correctAnswer": [1]
  },
  {
    "question": "16-QAM carries:",
    "options": ["2 bits/symbol", "4 bits/symbol", "6 bits/symbol", "8 bits/symbol"],
    "explanation": "16-QAM has 16 different symbol states, which can represent 4 bits per symbol (2^4 = 16).",
    "correctAnswer": [1]
  },
  {
    "question": "Which pulse modulation is the first step in PCM?",
    "options": ["PPM", "PAM", "PWM", "PSK"],
    "explanation": "Pulse Amplitude Modulation (PAM) is the first step in PCM, where the analog signal is sampled at regular intervals.",
    "correctAnswer": [1]
  },
  {
    "question": "PCM consists of steps:",
    "options": ["Sampling, Quantization, Encoding", "Modulation, Amplification, Decoding", "Mixing, Transmission, Reception", "None"],
    "explanation": "Pulse Code Modulation (PCM) involves three main steps: sampling the analog signal, quantization of samples, and encoding into binary.",
    "correctAnswer": [0]
  },
  {
    "question": "FDMA assigns:",
    "options": ["Separate frequency bands", "Separate time slots", "Separate codes", "Separate antennas"],
    "explanation": "Frequency Division Multiple Access (FDMA) assigns separate frequency bands to different users for simultaneous communication.",
    "correctAnswer": [0]
  },
  {
    "question": "TDMA is mainly used in:",
    "options": ["1G", "2G GSM", "3G", "5G"],
    "explanation": "Time Division Multiple Access (TDMA) is the primary multiple access technique used in 2G GSM systems.",
    "correctAnswer": [1]
  },
  {
    "question": "CDMA separates users by:",
    "options": ["Frequency", "Time", "Code", "Bandwidth"],
    "explanation": "Code Division Multiple Access (CDMA) separates users by assigning unique codes to each user for identification.",
    "correctAnswer": [2]
  },
  {
    "question": "OFDMA is used in:",
    "options": ["AM Radio", "Wi-Fi 6 & 4G LTE", "GSM", "Bluetooth"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) is used in modern systems like Wi-Fi 6 and 4G LTE for efficient spectrum utilization.",
    "correctAnswer": [1]
  },
  {
    "question": "Frequency reuse in cellular system helps in:",
    "options": ["Increasing bandwidth", "Efficient spectrum use", "Reducing antenna height", "Noise reduction"],
    "explanation": "Frequency reuse allows the same frequencies to be used in non-adjacent cells, leading to efficient spectrum utilization.",
    "correctAnswer": [1]
  },
  {
    "question": "Hard handover follows:",
    "options": ["Make before Break", "Break before Make", "Both", "None"],
    "explanation": "Hard handover follows 'Break before Make' principle where the old connection is terminated before establishing the new one.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is considered the fastest data-transferring guided medium?",
    "options": ["Unshielded Twisted Pair (UTP)", "Coaxial Cable", "Optical Fiber Cable", "Shielded Twisted Pair (STP)"],
    "explanation": "Optical Fiber Cable provides the highest data transfer speeds due to its use of light signals and immunity to electromagnetic interference.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the primary difference between UTP and STP cables?",
    "options": ["UTP is used for telephones, while STP is used for Ethernet.", "UTP uses copper wires, while STP uses glass fibers.", "STP includes an additional shield to reduce noise, while UTP does not.", "STP is cheaper than UTP."],
    "explanation": "Shielded Twisted Pair (STP) includes additional shielding to reduce electromagnetic interference and noise, while UTP does not have this shielding.",
    "correctAnswer": [2]
  },
  {
    "question": "Coaxial cables are commonly used in which of the following applications?",
    "options": ["Telephone lines", "TV networks and broadband internet", "Backbone networks for ISPs", "Local Area Networks (LANs)"],
    "explanation": "Coaxial cables are primarily used in TV networks and broadband internet applications due to their good shielding and bandwidth characteristics.",
    "correctAnswer": [1]
  },
  {
    "question": "Why is optical fiber immune to electromagnetic interference?",
    "options": ["It has a strong outer plastic jacket.", "It uses light signals instead of electrical signals to transmit data.", "It is made of pure silica glass.", "It has multiple layers of insulation."],
    "explanation": "Optical fiber is immune to electromagnetic interference because it uses light signals rather than electrical signals for data transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "Guided media is also known as bounded media because:",
    "options": ["It is very secure.", "It uses electromagnetic waves.", "It has a specific physical limit or path.", "It is used for short-distance transmission."],
    "explanation": "Guided media is called bounded media because it provides a specific physical path or boundary for signal transmission.",
    "correctAnswer": [2]
  },
  {
    "question": "Which type of unguided media requires a clear line-of-sight for proper signal transmission?",
    "options": ["Radio Waves", "Microwaves", "Infrared Waves", "Satellite Waves"],
    "explanation": "Microwaves require a clear line-of-sight path between transmitter and receiver due to their high frequency and directional nature.",
    "correctAnswer": [1]
  },
  {
    "question": "A key limitation of Infrared (IR) waves is that they:",
    "options": ["Are very expensive to generate.", "Require a very large antenna.", "Cannot pass through walls.", "Only work for very long distances."],
    "explanation": "Infrared waves cannot penetrate solid objects like walls, limiting their use to line-of-sight applications within the same room.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following statements about Radio waves is true?",
    "options": ["They are uni-directional.", "They are omni-directional.", "They require a direct line-of-sight.", "They are used for short-range communication only."],
    "explanation": "Radio waves are omni-directional, meaning they can propagate in all directions from the transmitting antenna.",
    "correctAnswer": [1]
  },
  {
    "question": "Wi-Fi and Bluetooth technologies primarily use which type of electromagnetic waves?",
    "options": ["Radio Waves", "Infrared Waves", "Microwaves", "X-rays"],
    "explanation": "Both Wi-Fi and Bluetooth operate in the radio frequency spectrum, using radio waves for wireless communication.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the primary application of satellite communication?",
    "options": ["TV remotes and wireless mice", "Covering very large areas for services like GPS and global broadcasting", "Short-distance data transfer between two devices", "Local FM radio transmission"],
    "explanation": "Satellite communication is primarily used for covering vast geographical areas, providing services like GPS, global broadcasting, and long-distance communication.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the definition of bandwidth?",
    "options": ["The number of cycles a signal completes per second.", "The speed of light in a vacuum.", "The range of frequencies a channel can transmit.", "The time period of one cycle of a signal."],
    "explanation": "Bandwidth is defined as the range of frequencies that a communication channel can effectively transmit.",
    "correctAnswer": [2]
  },
  {
    "question": "If a signal completes 50 cycles in one second, what is its frequency?",
    "options": ["100 Hz", "25 Hz", "50 Hz", "0.02 Hz"],
    "explanation": "Frequency is the number of cycles per second. If a signal completes 50 cycles in one second, its frequency is 50 Hz.",
    "correctAnswer": [2]
  },
  {
    "question": "An audio channel can transmit frequencies between 300 Hz and 3300 Hz. What is its bandwidth?",
    "options": ["3600 Hz", "3300 Hz", "3000 Hz", "300 Hz"],
    "explanation": "Bandwidth is calculated as the difference between the highest and lowest frequencies: 3300 Hz - 300 Hz = 3000 Hz.",
    "correctAnswer": [2]
  },
  {
    "question": "A higher bandwidth in a communication channel generally implies:",
    "options": ["Lower data transfer rate.", "Longer transmission distance.", "Higher data transfer rate.", "Lower noise immunity."],
    "explanation": "Higher bandwidth allows more information to be transmitted per unit time, resulting in higher data transfer rates.",
    "correctAnswer": [2]
  },
  {
    "question": "How is frequency related to the time period (T) of a signal?",
    "options": ["f = T", "f = T²", "f = 1/T", "f = T + 1"],
    "explanation": "Frequency (f) is the reciprocal of time period (T). If T is the time for one cycle, then f = 1/T cycles per second.",
    "correctAnswer": [2]
  },
  {
    "question": "What are the two states of a digital signal?",
    "options": ["High and Medium", "Positive and Negative", "0 (Low) and 1 (High)", "Analog and Continuous"],
    "explanation": "Digital signals have two discrete states: 0 (representing low voltage) and 1 (representing high voltage).",
    "correctAnswer": [2]
  },
  {
    "question": "Which logic gate will have an output of 1 only when all of its inputs are 1?",
    "options": ["OR Gate", "AND Gate", "NOT Gate", "XOR Gate"],
    "explanation": "An AND gate produces an output of 1 only when all of its inputs are 1. If any input is 0, the output is 0.",
    "correctAnswer": [1]
  },
  {
    "question": "NAND and NOR gates are called \"universal gates\" because:",
    "options": ["They are used in all digital devices.", "They are the simplest gates to manufacture.", "Any logical circuit can be built using only these gates.", "They were the first logic gates invented."],
    "explanation": "NAND and NOR gates are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates.",
    "correctAnswer": [2]
  },
  {
    "question": "The output of which type of circuit depends on both present inputs and past history?",
    "options": ["Analog Circuit", "Combinational Circuit", "Sequential Circuit", "Logic Gate Circuit"],
    "explanation": "Sequential circuits have memory elements and their output depends on both current inputs and previous state (past history).",
    "correctAnswer": [2]
  },
  {
    "question": "A circuit whose output depends only on the current inputs is known as a:",
    "options": ["Combinational Circuit", "Sequential Circuit", "Flip-Flop", "Register"],
    "explanation": "Combinational circuits have outputs that depend only on the current input values, with no memory of previous states.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the primary purpose of modulation?",
    "options": ["To decrease the bandwidth of a signal.", "To enable long-distance transmission and reduce required antenna size.", "To convert a digital signal to an analog signal.", "To encrypt data for security."],
    "explanation": "Modulation enables efficient long-distance transmission by shifting signal frequency to higher bands and reducing required antenna size.",
    "correctAnswer": [1]
  },
  {
    "question": "In Frequency Modulation (FM), which property of the carrier signal is varied?",
    "options": ["Amplitude", "Frequency", "Phase", "Both Amplitude and Phase"],
    "explanation": "In Frequency Modulation, the frequency of the carrier signal is varied according to the modulating signal while amplitude remains constant.",
    "correctAnswer": [1]
  },
  {
    "question": "Which digital modulation technique changes the frequency of the carrier signal to represent binary 0s and 1s?",
    "options": ["Amplitude Shift Keying (ASK)", "Phase Shift Keying (PSK)", "Frequency Shift Keying (FSK)", "Quadrature Amplitude Modulation (QAM)"],
    "explanation": "Frequency Shift Keying (FSK) uses different frequencies to represent binary 0s and 1s in digital communication.",
    "correctAnswer": [2]
  },
  {
    "question": "What remains constant in Amplitude Modulation (AM)?",
    "options": ["Amplitude and Frequency", "Frequency and Phase", "Amplitude and Phase", "Only the Amplitude"],
    "explanation": "In Amplitude Modulation, the frequency and phase of the carrier remain constant while only the amplitude varies with the modulating signal.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of these modulation techniques is widely used in modern Wi-Fi and 4G/5G systems?",
    "options": ["AM", "FSK", "ASK", "PSK"],
    "explanation": "Phase Shift Keying (PSK) and its variants like QAM (which combines PSK and ASK) are widely used in modern Wi-Fi and cellular systems.",
    "correctAnswer": [3]
  },
  {
    "question": "Which pulse modulation technique is digital?",
    "options": ["Pulse Amplitude Modulation (PAM)", "Pulse Width Modulation (PWM)", "Pulse Code Modulation (PCM)", "Pulse Position Modulation (PPM)"],
    "explanation": "Pulse Code Modulation (PCM) is a digital technique that converts analog signals into binary digital form through sampling, quantization, and encoding.",
    "correctAnswer": [2]
  },
  {
    "question": "In PWM, what property of the pulse is varied according to the modulating signal?",
    "options": ["Amplitude", "Position", "Width (Duration)", "Frequency"],
    "explanation": "In Pulse Width Modulation (PWM), the width or duration of the pulses is varied according to the amplitude of the modulating signal.",
    "correctAnswer": [2]
  },
  {
    "question": "The process of converting an analog signal into a binary stream using sampling, quantization, and encoding is called:",
    "options": ["PAM", "PWM", "PPM", "PCM"],
    "explanation": "Pulse Code Modulation (PCM) is the complete process of converting analog signals to digital form through sampling, quantization, and binary encoding.",
    "correctAnswer": [3]
  },
  {
    "question": "Which technique varies the amplitude of pulses while keeping their width and position constant?",
    "options": ["Pulse Amplitude Modulation (PAM)", "Pulse Width Modulation (PWM)", "Pulse Position Modulation (PPM)", "Pulse Code Modulation (PCM)"],
    "explanation": "Pulse Amplitude Modulation (PAM) varies only the amplitude of pulses while keeping their width and timing position constant.",
    "correctAnswer": [0]
  },
  {
    "question": "If the amplitude and width of pulses remain constant, but their time of occurrence changes, the technique is known as:",
    "options": ["PAM", "PWM", "Pulse Position Modulation (PPM)", "PCM"],
    "explanation": "Pulse Position Modulation (PPM) keeps pulse amplitude and width constant but varies the time position of pulses according to the modulating signal.",
    "correctAnswer": [2]
  },
  {
    "question": "In which multiple access technique are users separated by being assigned different time slots on the same frequency?",
    "options": ["FDMA", "TDMA", "CDMA", "SDMA"],
    "explanation": "Time Division Multiple Access (TDMA) separates users by assigning different time slots to each user on the same frequency channel.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the basis of separation for users in CDMA?",
    "options": ["Different frequencies", "Different time slots", "Unique codes", "Different spatial locations"],
    "explanation": "Code Division Multiple Access (CDMA) separates users by assigning unique spreading codes to each user, allowing simultaneous transmission.",
    "correctAnswer": [2]
  },
  {
    "question": "4G LTE and Wi-Fi 6 networks primarily use which multiple access technique for its high efficiency?",
    "options": ["TDMA", "CDMA", "FDMA", "OFDMA"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) is used in 4G LTE and Wi-Fi 6 for its high spectral efficiency and flexibility.",
    "correctAnswer": [3]
  },
  {
    "question": "Which technique assigns a separate frequency band to each user?",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "Frequency Division Multiple Access (FDMA) assigns separate frequency bands to different users for simultaneous communication.",
    "correctAnswer": [0]
  },
  {
    "question": "The use of multiple antennas to create separate spatial channels for different users is a characteristic of:",
    "options": ["FDMA", "TDMA", "OFDMA", "SDMA"],
    "explanation": "Space Division Multiple Access (SDMA) uses multiple antennas and spatial processing to create separate channels for different users based on their location.",
    "correctAnswer": [3]
  },
  {
    "question": "What are the two main components of a Mobile Station (MS)?",
    "options": ["Antenna and Battery", "Mobile Equipment (ME) and SIM card", "Base Transceiver Station (BTS) and Base Station Controller (BSC)", "Mobile Switching Center (MSC) and VLR"],
    "explanation": "A Mobile Station consists of Mobile Equipment (the physical device) and SIM card (subscriber identity module for authentication).",
    "correctAnswer": [1]
  },
  {
    "question": "The process of reusing the same frequencies in different cells that are sufficiently far apart is known as:",
    "options": ["Handover", "Modulation", "Frequency Reuse", "Multiplexing"],
    "explanation": "Frequency Reuse allows the same frequencies to be used in non-adjacent cells, maximizing spectrum efficiency in cellular networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a handover in a cellular network?",
    "options": ["The initial connection of a call.", "The process of switching the phone off and on.", "The process of transferring an active call from one base station to another.", "The allocation of a frequency channel to a user."],
    "explanation": "Handover is the process of transferring an ongoing call or data session from one base station to another as the mobile user moves.",
    "correctAnswer": [2]
  },
  {
    "question": "A \"break before make\" handover, where the old connection is dropped before the new one is established, is called:",
    "options": ["Soft Handover", "Hard Handover", "Fast Handover", "Seamless Handover"],
    "explanation": "Hard Handover follows 'break before make' principle where the old connection is terminated before establishing the new connection.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component of the Base Station is responsible for managing multiple BTSs and handovers?",
    "options": ["Mobile Station (MS)", "Mobile Switching Center (MSC)", "Base Transceiver Station (BTS)", "Base Station Controller (BSC)"],
    "explanation": "Base Station Controller (BSC) manages multiple Base Transceiver Stations (BTS) and handles handover decisions and radio resource management.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following is a guided/bounded transmission medium?",
    "options": ["Radio waves", "Satellite communication", "Coaxial cable", "Infrared"],
    "explanation": "Coaxial cable is a guided transmission medium that provides a physical path for signal transmission with good shielding properties.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the main advantage of optical fiber cable?",
    "options": ["Cheapest", "Highest data transfer speed", "Uses electric signals", "Susceptible to noise"],
    "explanation": "Optical fiber's main advantage is its highest data transfer speed among all transmission media, along with immunity to electromagnetic interference.",
    "correctAnswer": [1]
  },
  {
    "question": "Which wireless medium requires line-of-sight?",
    "options": ["Optical fiber", "UTP cable", "Microwave", "Coaxial cable"],
    "explanation": "Microwave communication requires line-of-sight transmission due to its high frequency and directional propagation characteristics.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is true about Infrared Waves?",
    "options": ["Can be used for long-distance communication", "Cannot pass through walls", "Used in TV broadcasting", "Used in fiber optics"],
    "explanation": "Infrared waves cannot penetrate solid objects like walls, limiting their application to line-of-sight communication within enclosed spaces.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the typical frequency range of radio waves used in communication?",
    "options": ["1 Hz – 300 Hz", "3 kHz – GHz", "300 GHz – 400 THz", "88 MHz – 108 MHz"],
    "explanation": "Radio waves used in communication typically range from 3 kHz to several GHz, covering various applications from AM radio to cellular communication.",
    "correctAnswer": [1]
  },
  {
    "question": "Which logic gate outputs 1 only if all its inputs are 1?",
    "options": ["OR", "NOT", "AND", "NAND"],
    "explanation": "The AND gate produces an output of 1 only when all of its inputs are 1. If any input is 0, the output becomes 0.",
    "correctAnswer": [2]
  },
  {
    "question": "Which is a universal gate?",
    "options": ["AND", "NAND", "OR", "XOR"],
    "explanation": "NAND is a universal gate because any Boolean logic function can be implemented using only NAND gates.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the output of a NOT gate if the input is 0?",
    "options": ["0", "1", "undefined", "doesn't change"],
    "explanation": "A NOT gate inverts its input. If the input is 0, the output is 1, and if the input is 1, the output is 0.",
    "correctAnswer": [1]
  },
  {
    "question": "Which application does NOT commonly use digital electronics?",
    "options": ["Robots", "Typewriters", "Mobile phones", "Computers"],
    "explanation": "Traditional typewriters are mechanical devices that do not commonly use digital electronics, unlike robots, mobile phones, and computers.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the value of binary 1011 in decimal?",
    "options": ["10", "11", "8", "15"],
    "explanation": "Binary 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 in decimal.",
    "correctAnswer": [1]
  },
  {
    "question": "The unit of frequency is:",
    "options": ["Newton", "Hertz", "Meter", "Tesla"],
    "explanation": "Frequency is measured in Hertz (Hz), which represents the number of cycles per second, named after Heinrich Hertz.",
    "correctAnswer": [1]
  },
  {
    "question": "If a channel passes frequencies between 500 Hz and 2500 Hz, what is its bandwidth?",
    "options": ["2000 Hz", "2500 Hz", "500 Hz", "3000 Hz"],
    "explanation": "Bandwidth is the difference between the highest and lowest frequencies: 2500 Hz - 500 Hz = 2000 Hz.",
    "correctAnswer": [0]
  },
  {
    "question": "Higher bandwidth results in:",
    "options": ["Lower data transfer rate", "Higher data transfer rate", "More noise only", "None of the above"],
    "explanation": "Higher bandwidth allows more information to be transmitted simultaneously, resulting in higher data transfer rates.",
    "correctAnswer": [1]
  },
  {
    "question": "Modulation is needed to:",
    "options": ["Increase antenna size", "Enable long-distance transmission", "Convert analog to digital", "Reduce bandwidth"],
    "explanation": "Modulation enables efficient long-distance transmission by shifting signals to higher frequencies and reducing antenna size requirements.",
    "correctAnswer": [1]
  },
  {
    "question": "In Amplitude Modulation (AM), which property of the carrier changes?",
    "options": ["Frequency", "Amplitude", "Phase", "Bandwidth"],
    "explanation": "In Amplitude Modulation, the amplitude of the carrier signal varies according to the modulating signal while frequency and phase remain constant.",
    "correctAnswer": [1]
  },
  {
    "question": "Frequency Modulation (FM) is widely used for:",
    "options": ["TV video", "FM Radio", "Satellite communication", "Wi-Fi only"],
    "explanation": "Frequency Modulation (FM) is widely used for FM radio broadcasting due to its better noise immunity compared to AM.",
    "correctAnswer": [1]
  },
  {
    "question": "Which digital modulation changes the frequency of the carrier according to data?",
    "options": ["ASK", "FSK", "PSK", "QAM"],
    "explanation": "Frequency Shift Keying (FSK) changes the frequency of the carrier signal to represent different binary data values.",
    "correctAnswer": [1]
  },
  {
    "question": "Pulse Amplitude Modulation (PAM) is:",
    "options": ["Analog pulse modulation", "Digital pulse modulation", "Frequency domain", "Space domain"],
    "explanation": "PAM is an analog pulse modulation technique where the amplitude of pulses varies with the analog signal amplitude.",
    "correctAnswer": [0]
  },
  {
    "question": "Which step is NOT part of PCM?",
    "options": ["Sampling", "Quantization", "Encoding", "Multiplexing"],
    "explanation": "PCM consists of sampling, quantization, and encoding. Multiplexing is a separate technique for combining multiple signals.",
    "correctAnswer": [3]
  },
  {
    "question": "Where are PWM techniques commonly used?",
    "options": ["Wi-Fi", "Motor control", "TV broadcasting", "GPS"],
    "explanation": "Pulse Width Modulation (PWM) is commonly used in motor control applications to vary motor speed by controlling the duty cycle.",
    "correctAnswer": [1]
  },
  {
    "question": "Which multiple access technique uses time slots for different users?",
    "options": ["FDMA", "TDMA", "CDMA", "SDMA"],
    "explanation": "Time Division Multiple Access (TDMA) assigns different time slots to different users on the same frequency channel.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technique separates users by code?",
    "options": ["FDMA", "TDMA", "CDMA", "SDMA"],
    "explanation": "Code Division Multiple Access (CDMA) separates users by assigning unique spreading codes to each user for identification.",
    "correctAnswer": [2]
  },
  {
    "question": "OFDMA is an advanced version of:",
    "options": ["FDMA", "TDMA", "SDMA", "CDMA"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) is an advanced version of FDMA that uses orthogonal subcarriers for efficient spectrum utilization.",
    "correctAnswer": [0]
  },
  {
    "question": "SDMA primarily relies on:",
    "options": ["Frequency bands", "Time division", "Multiple antennas/spatial separation", "Codes"],
    "explanation": "Space Division Multiple Access (SDMA) primarily relies on multiple antennas and spatial separation to create different channels for users based on their physical location.",
    "correctAnswer": [2]
  },
  {
    "question": "QAM combines:",
    "options": ["Amplitude and frequency modulation", "Amplitude and phase modulation", "Frequency and phase modulation", "None of these"],
    "explanation": "Quadrature Amplitude Modulation (QAM) combines both amplitude and phase modulation to achieve higher data rates.",
    "correctAnswer": [1]
  },
  {
    "question": "64-QAM can represent how many bits per symbol?",
    "options": ["4 bits", "6 bits", "2 bits", "8 bits"],
    "explanation": "64-QAM has 64 different symbol states, which can represent 6 bits per symbol (2^6 = 64).",
    "correctAnswer": [1]
  },
  {
    "question": "Which is a key advantage of higher-order QAM?",
    "options": ["Lower data rates", "High noise immunity always", "Higher data rates with better SNR", "Simple receiver"],
    "explanation": "Higher-order QAM provides higher data rates when signal-to-noise ratio (SNR) is sufficient, allowing more bits per symbol transmission.",
    "correctAnswer": [2]
  },
  {
    "question": "QAM is NOT commonly used in:",
    "options": ["Wi-Fi", "4G LTE", "Cable TV", "Analog telephone lines"],
    "explanation": "QAM is a digital modulation technique and is not used in traditional analog telephone lines, which use analog signaling.",
    "correctAnswer": [3]
  },
  {
    "question": "What does the Mobile Station (MS) consist of?",
    "options": ["Only the SIM card", "Base Station equipment", "Mobile Equipment (ME) and SIM card", "MSC"],
    "explanation": "A Mobile Station (MS) consists of two main components: Mobile Equipment (the physical device) and SIM card (subscriber identity).",
    "correctAnswer": [2]
  },
  {
    "question": "The central controller in a mobile network is:",
    "options": ["BTS", "BSC", "MSC", "SIM"],
    "explanation": "Mobile Switching Center (MSC) is the central controller in a mobile network that handles call switching, routing, and network management.",
    "correctAnswer": [2]
  },
  {
    "question": "What is Frequency Reuse used for?",
    "options": ["Saving electrical power", "Encrypting data", "Maximizing spectrum efficiency and capacity", "Downlink communication only"],
    "explanation": "Frequency Reuse is used to maximize spectrum efficiency and network capacity by reusing the same frequencies in non-adjacent cells.",
    "correctAnswer": [2]
  }
],
    assignment:[
  {
    "question": "Which technology is primarily used for wireless local area networks?",
    "options": [
      "WiFi",
      "Bluetooth", 
      "NFC",
      "Infrared"
    ],
    "explanation": "WiFi (Wireless Fidelity) is the primary technology used for wireless local area networks (WLANs). It allows devices to connect to a network and access the internet wirelessly within a certain range of a router or access point.",
    "correctAnswer": [0]
  },
  {
    "question": "What does 1G primarily support?",
    "options": [
      "Digital voice",
      "Analog voice",
      "High-speed data",
      "Video streaming"
    ],
    "explanation": "1G networks were the first generation of cellular systems and they supported analog voice communication only.",
    "correctAnswer": [1]
  },
  {
    "question": "Which generation introduced SMS (Short Message Service)?",
    "options": [
      "1G",
      "2G",
      "3G",
      "4G"
    ],
    "explanation": "2G networks introduced digital communication and supported SMS (text messaging) as a new service.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT a multiple access technique?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "HDMI"
    ],
    "explanation": "FDMA, TDMA, and CDMA are multiple access techniques, while HDMI is a wired display interface, not used in wireless communication.",
    "correctAnswer": [3]
  },
  {
    "question": "Which modulation technique is most resistant to noise?",
    "options": [
      "Amplitude Shift Keying (ASK)",
      "Frequency Shift Keying (FSK)",
      "Phase Shift Keying (PSK)",
      "Quadrature Amplitude Modulation (QAM)"
    ],
    "explanation": "Frequency Shift Keying (FSK) is generally more resistant to noise compared to ASK and PSK because frequency variations are less affected by amplitude noise.",
    "correctAnswer": [1]
  },
  {
    "question": "What does LTE stand for?",
    "options": [
      "Long Term Evolution",
      "Low Transmission Efficiency",
      "Local Telecommunication Exchange",
      "Linear Technology Enhancement"
    ],
    "explanation": "LTE stands for Long Term Evolution and is the standard for 4G wireless broadband technology.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the key technology that makes 5G ultra-reliable and low-latency?",
    "options": [
      "Beamforming",
      "URLLC",
      "MIMO",
      "HARQ"
    ],
    "explanation": "Ultra-Reliable Low Latency Communication (URLLC) is one of the main features of 5G that enables applications like autonomous driving and remote surgery.",
    "correctAnswer": [1]
  },
  {
    "question": "Which frequency band is commonly used for WiFi?",
    "options": [
      "900 MHz",
      "1.8 GHz",
      "2.4 GHz",
      "700 MHz"
    ],
    "explanation": "WiFi commonly operates in the 2.4 GHz and 5 GHz bands.",
    "correctAnswer": [2]
  },
  {
    "question": "What does OFDM stand for?",
    "options": [
      "Orthogonal Frequency Division Multiplexing",
      "Optical Frequency Data Management",
      "Online Frequency Division Model",
      "Orthogonal Frame Data Modulation"
    ],
    "explanation": "OFDM stands for Orthogonal Frequency Division Multiplexing, a modulation scheme used in LTE and 5G.",
    "correctAnswer": [0]
  },
  {
    "question": "Which cellular generation first introduced mobile internet browsing?",
    "options": [
      "1G",
      "2G",
      "3G",
      "4G"
    ],
    "explanation": "3G networks introduced mobile internet browsing and video calling features.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is a coding technique used in LTE?",
    "options": [
      "Turbo Codes",
      "Huffman Coding",
      "Run-Length Encoding",
      "Shannon Coding"
    ],
    "explanation": "LTE uses Turbo Codes (and LDPC in later versions) for error correction.",
    "correctAnswer": [0]
  },
  {
    "question": "Which multiple access technology is used in LTE?",
    "options": [
      "TDMA",
      "OFDMA",
      "FDMA",
      "CDMA"
    ],
    "explanation": "LTE uses Orthogonal Frequency Division Multiple Access (OFDMA) for downlink transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "Which term refers to the reuse of the same frequency in non-adjacent cells?",
    "options": [
      "Frequency Hopping",
      "Frequency Reuse",
      "Frequency Modulation",
      "Frequency Allocation"
    ],
    "explanation": "Frequency Reuse allows efficient use of spectrum by assigning the same frequencies to different cells that are far enough apart.",
    "correctAnswer": [1]
  },
  {
    "question": "Which antenna technology improves reliability by reducing fading?",
    "options": [
      "Beamforming",
      "Diversity",
      "Array Gain",
      "Spatial Multiplexing"
    ],
    "explanation": "Diversity techniques use multiple antennas to receive signals over different paths, reducing the impact of fading.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main role of HARQ in LTE?",
    "options": [
      "Scheduling",
      "Error correction with retransmission",
      "Handover",
      "Modulation adaptation"
    ],
    "explanation": "HARQ (Hybrid Automatic Repeat reQuest) combines error correction with retransmission to ensure reliable communication.",
    "correctAnswer": [1]
  },
  
  {
    "question": "Which cellular generation is based entirely on IP (Internet Protocol) networks?",
    "options": [
      "2G",
      "3G",
      "4G",
      "5G"
    ],
    "explanation": "4G LTE is the first generation of mobile networks designed entirely for IP-based communication, supporting VoIP and high-speed data.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is an example of a short-range wireless communication technology?",
    "options": [
      "WiMAX",
      "Bluetooth",
      "LTE",
      "5G NR"
    ],
    "explanation": "Bluetooth is designed for short-range wireless communication, typically within 10 meters.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main advantage of MIMO technology?",
    "options": [
      "Lower frequency usage",
      "Higher data rate and reliability",
      "Reduced power consumption",
      "Simpler antenna design"
    ],
    "explanation": "MIMO (Multiple Input Multiple Output) increases throughput and reliability by using multiple antennas for spatial multiplexing and diversity.",
    "correctAnswer": [1]
  },
  {
    "question": "Which frequency band is mostly used for 5G mmWave communication?",
    "options": [
      "Sub-1 GHz",
      "2.4 GHz",
      "24–100 GHz",
      "700 MHz"
    ],
    "explanation": "5G mmWave operates in very high-frequency bands, typically 24–100 GHz, to achieve extremely high data rates.",
    "correctAnswer": [2]
  },
  {
    "question": "Which modulation is commonly used in LTE?",
    "options": [
      "BPSK",
      "QPSK, 16QAM, 64QAM",
      "FSK",
      "ASK"
    ],
    "explanation": "LTE uses adaptive modulation such as QPSK, 16QAM, and 64QAM depending on channel quality.",
    "correctAnswer": [1]
  },
  {
    "question": "What does 'handover' mean in wireless networks?",
    "options": [
      "Switching from one device to another",
      "Changing frequency bands",
      "Transferring an active call/data session between cells",
      "Allocating spectrum dynamically"
    ],
    "explanation": "Handover is the process of transferring an ongoing call or data session from one cell to another to maintain connectivity.",
    "correctAnswer": [2]
  },
  {
    "question": "Which multiple access scheme is used in 5G?",
    "options": [
      "OFDMA",
      "TDMA",
      "FDMA",
      "SDMA"
    ],
    "explanation": "5G uses OFDMA (Orthogonal Frequency Division Multiple Access) for both uplink and downlink, enabling flexible resource allocation.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is an advantage of frequency reuse?",
    "options": [
      "Reduced latency",
      "Increased capacity",
      "Improved modulation",
      "Reduced antenna cost"
    ],
    "explanation": "Frequency reuse allows the same frequencies to be used in different cells, thereby increasing overall network capacity.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main function of error-correcting codes?",
    "options": [
      "Increase transmission power",
      "Reduce transmission delay",
      "Detect and correct errors",
      "Enhance antenna gain"
    ],
    "explanation": "Error-correcting codes improve reliability by detecting and correcting bit errors caused by noise and interference.",
    "correctAnswer": [2]
  },
  {
    "question": "Which type of antenna is commonly used in mobile phones?",
    "options": [
      "Parabolic dish",
      "Monopole",
      "Yagi-Uda",
      "Horn antenna"
    ],
    "explanation": "Mobile phones typically use compact monopole or patch antennas that are small and efficient.",
    "correctAnswer": [1]
  },
  {
    "question": "Which term refers to allocating time slots to users?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "OFDMA"
    ],
    "explanation": "TDMA (Time Division Multiple Access) divides a channel into time slots allocated to different users.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT a service provided by LTE?",
    "options": [
      "VoLTE",
      "Video Streaming",
      "Online Gaming",
      "Analog Voice Calls"
    ],
    "explanation": "LTE is a fully digital network and does not support analog voice calls.",
    "correctAnswer": [3]
  },
  {
    "question": "Which 3G technology was widely used in Europe and Asia?",
    "options": [
      "CDMA2000",
      "UMTS (WCDMA)",
      "WiMAX",
      "GSM"
    ],
    "explanation": "UMTS (Universal Mobile Telecommunications System) based on WCDMA was the standard 3G technology in Europe and Asia.",
    "correctAnswer": [1]
  },
  {
    "question": "What does 'spectrum efficiency' mean?",
    "options": [
      "Power saving in base stations",
      "Efficient use of frequency spectrum to maximize data rate per Hz",
      "Reducing antenna size",
      "Minimizing delay"
    ],
    "explanation": "Spectrum efficiency refers to the ability to transmit the maximum possible data rate within a given bandwidth.",
    "correctAnswer": [1]
  },
  {
    "question": "What does QoS stand for in wireless networks?",
    "options": [
      "Quality of Security",
      "Quality of Service",
      "Quantity of Spectrum",
      "Queue of Signals"
    ],
    "explanation": "QoS (Quality of Service) refers to network performance guarantees like bandwidth, delay, and jitter for different applications.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technology introduced packet switching in mobile networks?",
    "options": [
      "2G",
      "2.5G (GPRS)",
      "3G",
      "4G"
    ],
    "explanation": "2.5G (GPRS) introduced packet-switched data services on top of 2G networks.",
    "correctAnswer": [1]
  },
  {
    "question": "Which antenna technique is used to direct signals toward specific users?",
    "options": [
      "Diversity",
      "Beamforming",
      "MIMO",
      "HARQ"
    ],
    "explanation": "Beamforming directs signals toward a user to improve signal strength and reduce interference.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT an application of 5G?",
    "options": [
      "Autonomous Vehicles",
      "IoT (Internet of Things)",
      "Remote Surgery",
      "Analog TV Broadcasting"
    ],
    "explanation": "5G supports advanced applications like IoT, autonomous driving, and remote surgery but not analog TV broadcasting.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the purpose of adaptive modulation in LTE?",
    "options": [
      "Increase antenna gain",
      "Adjust data rate based on channel quality",
      "Reduce handover delay",
      "Improve voice clarity"
    ],
    "explanation": "Adaptive modulation adjusts the modulation scheme depending on channel quality, balancing speed and reliability.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is true about 3G networks?",
    "options": [
      "They only support analog voice",
      "They introduced broadband internet",
      "They are IP-only networks",
      "They use mmWave frequencies"
    ],
    "explanation": "3G networks introduced broadband mobile internet and video calling, but were not fully IP-based.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component of LTE handles mobility management and IP connectivity?",
    "options": [
      "E-UTRAN",
      "eNodeB",
      "EPC",
      "HARQ"
    ],
    "explanation": "The EPC (Evolved Packet Core) handles mobility management, IP connectivity, and authentication in LTE networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the typical latency target of 5G URLLC?",
    "options": [
      "100 ms",
      "10 ms",
      "1 ms",
      "50 ms"
    ],
    "explanation": "5G URLLC (Ultra Reliable Low Latency Communication) aims for latency as low as 1 ms.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of these technologies is backward-compatible with GSM networks?",
    "options": [
      "UMTS",
      "WiMAX",
      "5G NR",
      "LoRa"
    ],
    "explanation": "UMTS (3G) was designed to be backward-compatible with GSM networks for easier migration.",
    "correctAnswer": [0]
  },
  {
    "question": "Which type of multiplexing is used in OFDM?",
    "options": [
      "Time Division",
      "Frequency Division",
      "Orthogonal Frequency Division",
      "Code Division"
    ],
    "explanation": "OFDM uses orthogonal frequency division, splitting the bandwidth into many orthogonal subcarriers.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is a limitation of mmWave communication?",
    "options": [
      "Low capacity",
      "High latency",
      "Poor penetration through obstacles",
      "Lack of modulation schemes"
    ],
    "explanation": "mmWave signals cannot easily penetrate obstacles like walls or trees, limiting coverage.",
    "correctAnswer": [2]
  },
  {
    "question": "Which coding method is being adopted in 5G NR for error correction?",
    "options": [
      "Turbo Codes",
      "Reed-Solomon",
      "LDPC and Polar Codes",
      "Hamming Codes"
    ],
    "explanation": "5G NR adopts LDPC for data channels and Polar Codes for control channels.",
    "correctAnswer": [2]
  },
  {
    "question": "Which multiple access technique allows all users to transmit simultaneously using different codes?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "OFDMA"
    ],
    "explanation": "CDMA allows multiple users to share the same spectrum simultaneously by assigning unique codes.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is the main challenge in wireless communication?",
    "options": [
      "Multipath fading",
      "High bandwidth",
      "Mobility",
      "Large coverage area"
    ],
    "explanation": "Multipath fading causes signal distortion due to reflections, making reliable wireless communication challenging.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the main benefit of cell splitting in wireless networks?",
    "options": [
      "Increased coverage",
      "Increased capacity",
      "Reduced interference",
      "Lower frequency usage"
    ],
    "explanation": "Cell splitting increases capacity by creating smaller cells that can handle more users.",
    "correctAnswer": [1]
  },
  {
    "question": "Which access technique divides spectrum into frequency bands?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "OFDMA"
    ],
    "explanation": "FDMA (Frequency Division Multiple Access) assigns distinct frequency bands to different users.",
    "correctAnswer": [0]
  },
  {
    "question": "Which part of LTE handles radio communication with mobile devices?",
    "options": [
      "EPC",
      "MME",
      "E-UTRAN",
      "SGW"
    ],
    "explanation": "E-UTRAN (Evolved Universal Terrestrial Radio Access Network) manages the radio interface between user devices and the LTE network.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the main limitation of 2G networks?",
    "options": [
      "No support for voice",
      "Low data rates",
      "High latency",
      "No mobility"
    ],
    "explanation": "2G networks had very low data rates and were mainly designed for voice and SMS services.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technique improves coverage by combining signals from multiple antennas?",
    "options": [
      "Spatial Multiplexing",
      "Diversity",
      "OFDMA",
      "Beamforming"
    ],
    "explanation": "Diversity techniques improve coverage and reliability by combining signals from multiple antennas.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the maximum modulation scheme used in standard LTE?",
    "options": [
      "QPSK",
      "16QAM",
      "64QAM",
      "256QAM"
    ],
    "explanation": "Standard LTE supports up to 64QAM modulation, while LTE-Advanced introduced 256QAM.",
    "correctAnswer": [2]
  },
  {
    "question": "Which service requires the lowest latency?",
    "options": [
      "File downloads",
      "Email",
      "Remote surgery",
      "Video streaming"
    ],
    "explanation": "Remote surgery requires ultra-low latency to ensure immediate response and precision.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the main function of a base station in a cellular system?",
    "options": [
      "Provide internet backbone",
      "Manage user mobility and radio access",
      "Generate modulation schemes",
      "Allocate IP addresses"
    ],
    "explanation": "The base station (eNodeB in LTE) handles radio communication, user mobility, and resource allocation.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is the key feature of 5G massive MIMO?",
    "options": [
      "High latency",
      "Multiple antennas serving many users",
      "Analog-only signals",
      "Reduced frequency reuse"
    ],
    "explanation": "Massive MIMO in 5G uses many antennas to serve multiple users simultaneously with high efficiency.",
    "correctAnswer": [1]
  },
  {
    "question": "Which network parameter is measured in bits per second per Hz?",
    "options": [
      "Latency",
      "Throughput",
      "Spectral efficiency",
      "Bandwidth"
    ],
    "explanation": "Spectral efficiency measures how efficiently bandwidth is used, in bps/Hz.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G service type supports IoT devices with low power and massive connectivity?",
    "options": [
      "eMBB",
      "URLLC",
      "mMTC",
      "VoLTE"
    ],
    "explanation": "mMTC (Massive Machine-Type Communication) enables connectivity for billions of IoT devices.",
    "correctAnswer": [2]
  },
  {
    "question": "Which wireless standard is often called WiMAX?",
    "options": [
      "IEEE 802.11",
      "IEEE 802.15",
      "IEEE 802.16",
      "IEEE 802.3"
    ],
    "explanation": "WiMAX is based on the IEEE 802.16 standard for broadband wireless access.",
    "correctAnswer": [2]
  },
  {
    "question": "Which cellular generation first introduced video calling?",
    "options": [
      "2G",
      "3G",
      "4G",
      "5G"
    ],
    "explanation": "3G networks introduced video calling and mobile internet browsing.",
    "correctAnswer": [1]
  },
  {
    "question": "Which wireless channel phenomenon causes signal copies to arrive at different times?",
    "options": [
      "Interference",
      "Multipath",
      "Fading",
      "Diversity"
    ],
    "explanation": "Multipath occurs when signal copies reflect off obstacles and arrive at the receiver at slightly different times.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of these is NOT a core feature of 5G?",
    "options": [
      "Enhanced Mobile Broadband",
      "Ultra-Reliable Low Latency Communication",
      "Massive Machine-Type Communication",
      "Analog Voice Transmission"
    ],
    "explanation": "5G focuses on eMBB, URLLC, and mMTC. Analog voice is not part of 5G.",
    "correctAnswer": [3]
  },
  {
    "question": "Which part of the electromagnetic spectrum is typically used for mobile communication?",
    "options": [
      "Gamma rays",
      "Microwave and radio frequencies",
      "Infrared",
      "X-rays"
    ],
    "explanation": "Mobile communication mainly uses radio and microwave frequencies ranging from hundreds of MHz to a few GHz.",
    "correctAnswer": [1]
  },
  {
    "question": "Which multiple access technique divides users into orthogonal subcarriers?",
    "options": [
      "CDMA",
      "FDMA",
      "TDMA",
      "OFDMA"
    ],
    "explanation": "OFDMA divides spectrum into orthogonal subcarriers, each assigned to different users.",
    "correctAnswer": [3]
  },
  {
      "question": "What is the fundamental purpose of modulation in communication systems?",
      "options": [
        "To increase signal power",
        "To adapt information signal for transmission",
        "To reduce noise",
        "To compress data"
      ],
      "explanation": "Modulation adapts the information signal to make it suitable for transmission over the communication channel by varying carrier wave properties.",
      "correctAnswer": [1]
    },
    {
      "question": "Which type of cable uses light pulses for data transmission?",
      "options": [
        "Coaxial cable",
        "Twisted pair",
        "Optical fiber",
        "HDMI cable"
      ],
      "explanation": "Optical fiber cables transmit data using light pulses, providing high bandwidth and immunity to electromagnetic interference.",
      "correctAnswer": [2]
    },
    {
      "question": "In which frequency band is FM radio primarily transmitted?",
      "options": [
        "LF (Low Frequency)",
        "VHF (Very High Frequency)",
        "UHF (Ultra High Frequency)",
        "SHF (Super High Frequency)"
      ],
      "explanation": "FM radio broadcasting primarily uses the VHF band, typically between 88-108 MHz.",
      "correctAnswer": [1]
    },
    {
      "question": "What does BPSK stand for?",
      "options": [
        "Binary Phase Shift Keying",
        "Broadband Phase Shift Keying",
        "Basic Phase Shift Keying",
        "Balanced Phase Shift Keying"
      ],
      "explanation": "BPSK stands for Binary Phase Shift Keying, a digital modulation technique using two phase states.",
      "correctAnswer": [0]
    },
    {
      "question": "Which multiple access technique uses unique codes for each user?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA",
        "OFDMA"
      ],
      "explanation": "CDMA (Code Division Multiple Access) assigns unique spreading codes to each user for simultaneous transmission.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main advantage of digital signals over analog signals?",
      "options": [
        "Simpler circuits",
        "Lower bandwidth requirement",
        "Better noise immunity",
        "Cheaper implementation"
      ],
      "explanation": "Digital signals offer better noise immunity and can be regenerated without cumulative degradation.",
      "correctAnswer": [2]
    },
    {
      "question": "Which component is responsible for mobility management in 5G core?",
      "options": [
        "SMF",
        "UPF",
        "AMF",
        "gNodeB"
      ],
      "explanation": "AMF (Access and Mobility Management Function) handles mobility management in 5G core networks.",
      "correctAnswer": [2]
    },
    {
      "question": "What does QAM modulation vary to encode data?",
      "options": [
        "Only amplitude",
        "Only phase",
        "Both amplitude and phase",
        "Only frequency"
      ],
      "explanation": "QAM (Quadrature Amplitude Modulation) varies both amplitude and phase of the carrier to encode multiple bits per symbol.",
      "correctAnswer": [2]
    },
    {
      "question": "In cellular systems, what is the purpose of handoff?",
      "options": [
        "To increase signal strength",
        "To maintain connection as user moves between cells",
        "To reduce interference",
        "To save battery power"
      ],
      "explanation": "Handoff ensures seamless connectivity as mobile users move from one cell coverage area to another.",
      "correctAnswer": [1]
    },
    {
      "question": "Which 5G use case requires ultra-low latency?",
      "options": [
        "eMBB",
        "URLLC",
        "mMTC",
        "All of the above"
      ],
      "explanation": "URLLC (Ultra-Reliable Low-Latency Communication) is specifically designed for applications requiring very low latency.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the bandwidth of an AM signal compared to the modulating frequency?",
      "options": [
        "Equal to modulating frequency",
        "Twice the modulating frequency",
        "Half the modulating frequency",
        "Four times the modulating frequency"
      ],
      "explanation": "The bandwidth of an AM signal is twice the highest modulating frequency due to upper and lower sidebands.",
      "correctAnswer": [1]
    },
    {
      "question": "Which electromagnetic waves have the lowest frequency?",
      "options": [
        "Radio waves",
        "Microwaves",
        "Infrared",
        "Visible light"
      ],
      "explanation": "Radio waves have the lowest frequency in the electromagnetic spectrum used for communication.",
      "correctAnswer": [0]
    },
    {
      "question": "What does sectoring achieve in cellular systems?",
      "options": [
        "Reduces cell size",
        "Increases capacity and reduces interference",
        "Eliminates handoffs",
        "Increases transmission power"
      ],
      "explanation": "Sectoring divides cells into sectors using directional antennas to increase capacity and reduce interference.",
      "correctAnswer": [1]
    },
    {
      "question": "Which is NOT a basic component of a communication system?",
      "options": [
        "Transmitter",
        "Receiver",
        "Channel",
        "Modulator"
      ],
      "explanation": "While modulators are important, the three basic components are transmitter, channel, and receiver.",
      "correctAnswer": [3]
    },
    {
      "question": "What type of modulation is least affected by noise?",
      "options": [
        "AM",
        "FM",
        "PM",
        "All are equally affected"
      ],
      "explanation": "FM is less affected by noise because noise typically affects amplitude rather than frequency.",
      "correctAnswer": [1]
    },
    {
      "question": "In QPSK, how many bits are transmitted per symbol?",
      "options": [
        "1",
        "2",
        "4",
        "8"
      ],
      "explanation": "QPSK (Quadrature Phase Shift Keying) uses four phase states to transmit 2 bits per symbol.",
      "correctAnswer": [1]
    },
    {
      "question": "Which access technique allows frequency reuse?",
      "options": [
        "FDMA only",
        "TDMA only",
        "CDMA only",
        "All multiple access techniques"
      ],
      "explanation": "All multiple access techniques can implement frequency reuse in cellular systems to increase spectrum efficiency.",
      "correctAnswer": [3]
    },
    {
      "question": "What is the primary advantage of optical fiber communication?",
      "options": [
        "Low cost",
        "Easy installation",
        "High bandwidth and low loss",
        "No need for repeaters"
      ],
      "explanation": "Optical fiber provides very high bandwidth, low transmission loss, and immunity to electromagnetic interference.",
      "correctAnswer": [2]
    },
    {
      "question": "Which generation introduced packet-switched networks for mobile communication?",
      "options": [
        "2G",
        "3G",
        "4G",
        "5G"
      ],
      "explanation": "3G was the first generation to introduce packet-switched networks for mobile data communication.",
      "correctAnswer": [1]
    },
    {
      "question": "What does NSA stand for in 5G deployment?",
      "options": [
        "New Service Architecture",
        "Non-Standalone",
        "Network Service Access",
        "Next Stage Architecture"
      ],
      "explanation": "NSA stands for Non-Standalone, referring to 5G deployment that relies on existing 4G infrastructure.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component handles user data routing in 5G core?",
      "options": [
        "AMF",
        "SMF",
        "UPF",
        "gNodeB"
      ],
      "explanation": "UPF (User Plane Function) handles user data packet routing and forwarding in 5G core networks.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main characteristic of analog signals?",
      "options": [
        "Discrete values",
        "Continuous variation",
        "Binary representation",
        "Digital encoding"
      ],
      "explanation": "Analog signals are characterized by continuous variation in both time and amplitude.",
      "correctAnswer": [1]
    },
    {
      "question": "Which wireless technology is best for short-range communication?",
      "options": [
        "Wi-Fi",
        "Bluetooth",
        "LTE",
        "Satellite"
      ],
      "explanation": "Bluetooth is designed for short-range, low-power device-to-device communication.",
      "correctAnswer": [1]
    },
    {
      "question": "What does mMTC primarily support?",
      "options": [
        "High-speed internet",
        "Voice calls",
        "IoT devices",
        "Video streaming"
      ],
      "explanation": "mMTC (Massive Machine-Type Communication) is designed to support massive numbers of IoT devices.",
      "correctAnswer": [2]
    },
    {
      "question": "Which modulation parameter remains constant in AM?",
      "options": [
        "Amplitude",
        "Frequency",
        "Phase",
        "Power"
      ],
      "explanation": "In AM (Amplitude Modulation), the frequency of the carrier wave remains constant while amplitude varies.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the speed of light in vacuum?",
      "options": [
        "3 × 10^6 m/s",
        "3 × 10^8 m/s",
        "3 × 10^10 m/s",
        "3 × 10^12 m/s"
      ],
      "explanation": "The speed of light (and all electromagnetic waves) in vacuum is approximately 3 × 10^8 meters per second.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technique increases cellular network capacity by dividing large cells?",
      "options": [
        "Sectoring",
        "Cell splitting",
        "Handoff",
        "Frequency reuse"
      ],
      "explanation": "Cell splitting increases capacity by dividing large cells into smaller ones, allowing more users per area.",
      "correctAnswer": [1]
    },
    {
      "question": "What type of antenna is used in SDMA?",
      "options": [
        "Omnidirectional",
        "Directional",
        "Loop",
        "Monopole"
      ],
      "explanation": "SDMA (Space Division Multiple Access) uses directional antennas or beamforming to separate users spatially.",
      "correctAnswer": [1]
    },
    {
      "question": "Which digital modulation offers the highest spectral efficiency?",
      "options": [
        "BPSK",
        "QPSK",
        "16-QAM",
        "256-QAM"
      ],
      "explanation": "256-QAM offers the highest spectral efficiency among the options, transmitting 8 bits per symbol.",
      "correctAnswer": [3]
    },
    {
      "question": "What is the main disadvantage of higher-order QAM?",
      "options": [
        "Lower data rate",
        "Increased noise sensitivity",
        "Simpler implementation",
        "Reduced bandwidth efficiency"
      ],
      "explanation": "Higher-order QAM modulations are more sensitive to noise and interference despite offering higher data rates.",
      "correctAnswer": [1]
    },
    {
      "question": "Which network element connects to the core network in LTE?",
      "options": [
        "NodeB",
        "eNodeB",
        "gNodeB",
        "Base Station Controller"
      ],
      "explanation": "In LTE networks, the eNodeB (evolved NodeB) connects directly to the core network (EPC).",
      "correctAnswer": [1]
    },
    {
      "question": "What does EPC stand for in LTE networks?",
      "options": [
        "Enhanced Packet Core",
        "Evolved Packet Core",
        "Extended Packet Core",
        "Efficient Packet Core"
      ],
      "explanation": "EPC stands for Evolved Packet Core, the core network architecture used in LTE systems.",
      "correctAnswer": [1]
    },
    {
      "question": "Which frequency range is typically used for microwave communication?",
      "options": [
        "3 kHz - 30 kHz",
        "30 MHz - 300 MHz",
        "300 MHz - 300 GHz",
        "Above 300 GHz"
      ],
      "explanation": "Microwave frequencies typically range from 300 MHz to 300 GHz, used for satellite and point-to-point communications.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the primary benefit of using twisted pair cables?",
      "options": [
        "High bandwidth",
        "Noise reduction through twisting",
        "Light transmission",
        "Wireless capability"
      ],
      "explanation": "Twisted pair cables reduce electromagnetic interference and crosstalk through the twisting of wire pairs.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation type is used in traditional AM radio broadcasting?",
      "options": [
        "DSB-SC",
        "DSB-FC",
        "SSB",
        "VSB"
      ],
      "explanation": "Traditional AM radio uses DSB-FC (Double Sideband Full Carrier) modulation for simple demodulation.",
      "correctAnswer": [1]
    },
    {
      "question": "What does MIMO stand for?",
      "options": [
        "Multiple Input Multiple Output",
        "Maximum Input Maximum Output",
        "Multi-Interface Multi-Operation",
        "Mobile Input Mobile Output"
      ],
      "explanation": "MIMO stands for Multiple Input Multiple Output, a technology using multiple antennas for improved performance.",
      "correctAnswer": [0]
    },
    {
      "question": "Which parameter determines the energy of electromagnetic waves?",
      "options": [
        "Amplitude only",
        "Frequency only",
        "Both amplitude and frequency",
        "Wavelength only"
      ],
      "explanation": "The energy of electromagnetic waves is directly proportional to their frequency (E = hf).",
      "correctAnswer": [1]
    },
    {
      "question": "What is the main purpose of channel coding?",
      "options": [
        "Increase data rate",
        "Reduce bandwidth",
        "Error detection and correction",
        "Signal amplification"
      ],
      "explanation": "Channel coding adds redundancy to detect and correct errors introduced during transmission.",
      "correctAnswer": [2]
    },
    {
      "question": "Which access method is used in GSM networks?",
      "options": [
        "FDMA only",
        "TDMA only",
        "CDMA only",
        "FDMA + TDMA"
      ],
      "explanation": "GSM networks use a combination of FDMA (for different carriers) and TDMA (for time slots within each carrier).",
      "correctAnswer": [3]
    },
    {
      "question": "What is beamforming in wireless communication?",
      "options": [
        "Creating multiple beams of light",
        "Directing radio signals in specific directions",
        "Splitting frequency bands",
        "Time division of signals"
      ],
      "explanation": "Beamforming is a technique that directs radio frequency signals in specific directions to improve signal quality and reduce interference.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component manages session establishment in 5G?",
      "options": [
        "AMF",
        "SMF",
        "UPF",
        "NSSF"
      ],
      "explanation": "SMF (Session Management Function) handles session establishment, modification, and termination in 5G networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the typical frequency range for 5G millimeter wave?",
      "options": [
        "1-6 GHz",
        "6-24 GHz",
        "24-100 GHz",
        "Above 100 GHz"
      ],
      "explanation": "5G millimeter wave typically operates in the 24-100 GHz frequency range for ultra-high speed applications.",
      "correctAnswer": [2]
    },
    {
      "question": "Which duplexing method allows simultaneous transmission and reception?",
      "options": [
        "TDD (Time Division Duplex)",
        "FDD (Frequency Division Duplex)",
        "Both TDD and FDD",
        "Neither"
      ],
      "explanation": "FDD (Frequency Division Duplex) uses separate frequency bands for uplink and downlink, allowing simultaneous transmission and reception.",
      "correctAnswer": [1]
    },
    {
      "question": "What is network slicing in 5G?",
      "options": [
        "Physical division of network",
        "Virtual division of network resources",
        "Time-based resource allocation",
        "Frequency band separation"
      ],
      "explanation": "Network slicing creates virtual, dedicated networks on shared physical infrastructure to serve different service requirements.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation is most robust against noise?",
      "options": [
        "BPSK",
        "QPSK",
        "16-QAM",
        "64-QAM"
      ],
      "explanation": "BPSK (Binary Phase Shift Keying) is most robust against noise due to maximum distance between constellation points.",
      "correctAnswer": [0]
    },
    {
      "question": "What does OFDM stand for?",
      "options": [
        "Orthogonal Frequency Division Multiplexing",
        "Optimal Frequency Distribution Method",
        "Open Frequency Data Modulation",
        "Organized Frequency Duplex Mode"
      ],
      "explanation": "OFDM stands for Orthogonal Frequency Division Multiplexing, a technique using multiple orthogonal subcarriers.",
      "correctAnswer": [0]
    },
    {
      "question": "Which technology enables massive connectivity in 5G?",
      "options": [
        "eMBB",
        "URLLC",
        "mMTC",
        "FWA"
      ],
      "explanation": "mMTC (Massive Machine-Type Communication) enables massive connectivity for IoT and M2M applications in 5G.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main advantage of digital over analog communication?",
      "options": [
        "Simpler equipment",
        "Natural signal representation",
        "Regeneration without degradation",
        "Lower bandwidth requirement"
      ],
      "explanation": "Digital signals can be regenerated at repeaters without cumulative degradation, unlike analog signals.",
      "correctAnswer": [2]
    },
    {
      "question": "Which cellular generation first introduced IP-based networks?",
      "options": [
        "2G",
        "3G",
        "4G",
        "5G"
      ],
      "explanation": "4G LTE was the first generation to use a fully IP-based network architecture (All-IP network).",
      "correctAnswer": [2]
    },
    {
      "question": "What is the purpose of cyclic prefix in OFDM?",
      "options": [
        "Increase data rate",
        "Combat inter-symbol interference",
        "Reduce power consumption",
        "Improve modulation efficiency"
      ],
      "explanation": "Cyclic prefix in OFDM helps combat inter-symbol interference and maintains orthogonality between subcarriers.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component handles authentication in LTE networks?",
      "options": [
        "eNodeB",
        "MME",
        "SGW",
        "PGW"
      ],
      "explanation": "MME (Mobility Management Entity) handles authentication, authorization, and mobility management in LTE networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the key characteristic of visible light communication?",
      "options": [
        "Long-range transmission",
        "High power consumption",
        "Line-of-sight requirement",
        "Low data rates"
      ],
      "explanation": "Visible light communication requires line-of-sight between transmitter and receiver due to the nature of light propagation.",
      "correctAnswer": [2]
    },
    {
      "question": "Which access technique provides the best spectrum efficiency?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA",
        "OFDMA"
      ],
      "explanation": "OFDMA provides excellent spectrum efficiency by allowing flexible allocation of subcarriers to different users.",
      "correctAnswer": [3]
    },
    {
      "question": "What is carrier aggregation in LTE-Advanced?",
      "options": [
        "Combining multiple base stations",
        "Combining multiple frequency bands",
        "Combining multiple antennas",
        "Combining multiple protocols"
      ],
      "explanation": "Carrier aggregation combines multiple frequency bands to increase overall bandwidth and data rates in LTE-Advanced.",
      "correctAnswer": [1]
    },
    {
      "question": "Which parameter is most important for URLLC applications?",
      "options": [
        "High data rate",
        "Low latency",
        "Wide coverage",
        "Low cost"
      ],
      "explanation": "URLLC (Ultra-Reliable Low-Latency Communication) prioritizes very low latency for mission-critical applications.",
      "correctAnswer": [1]
    },
    {
      "question": "What does edge computing provide in 5G networks?",
      "options": [
        "Increased coverage",
        "Reduced latency",
        "Higher data rates",
        "Better security"
      ],
      "explanation": "Edge computing brings processing closer to users, significantly reducing latency for time-sensitive applications.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation technique varies only the phase of carrier?",
      "options": [
        "AM",
        "FM",
        "PSK",
        "QAM"
      ],
      "explanation": "PSK (Phase Shift Keying) varies only the phase of the carrier wave while keeping amplitude and frequency constant.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main benefit of spatial diversity in MIMO?",
      "options": [
        "Increased power",
        "Reduced interference",
        "Improved reliability",
        "Lower cost"
      ],
      "explanation": "Spatial diversity in MIMO improves reliability by providing multiple independent signal paths.",
      "correctAnswer": [2]
    },
    {
      "question": "Which technique is used to increase data rates in the same bandwidth?",
      "options": [
        "Higher power transmission",
        "Multiple antennas",
        "Higher-order modulation",
        "Frequency hopping"
      ],
      "explanation": "Higher-order modulation schemes increase data rates by transmitting more bits per symbol in the same bandwidth.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the primary function of a repeater in communication systems?",
      "options": [
        "Filter noise",
        "Amplify and regenerate signals",
        "Compress data",
        "Convert protocols"
      ],
      "explanation": "Repeaters amplify and regenerate signals to extend transmission distance and combat signal degradation.",
      "correctAnswer": [1]
    },
    {
      "question": "Which wireless standard operates in unlicensed spectrum?",
      "options": [
        "LTE",
        "5G NR",
        "Wi-Fi",
        "GSM"
      ],
      "explanation": "Wi-Fi operates in unlicensed spectrum bands (like 2.4 GHz and 5 GHz ISM bands) that don't require licenses.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main advantage of full-duplex communication?",
      "options": [
        "Higher security",
        "Simultaneous transmission in both directions",
        "Lower power consumption",
        "Simpler implementation"
      ],
      "explanation": "Full-duplex communication allows simultaneous transmission and reception, doubling the effective data rate.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component provides internet connectivity in LTE core network?",
      "options": [
        "MME",
        "SGW",
        "PGW",
        "HSS"
      ],
      "explanation": "PGW (PDN Gateway) provides connectivity to external packet data networks including the internet in LTE.",
      "correctAnswer": [2]
    },
    {
      "question": "What is adaptive modulation and coding?",
      "options": [
        "Fixed modulation scheme",
        "Changing modulation based on channel conditions",
        "Using only one type of coding",
        "Manual modulation adjustment"
      ],
      "explanation": "Adaptive modulation and coding dynamically adjusts modulation and coding schemes based on channel quality.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technology allows multiple users to share the same time and frequency?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA",
        "SDMA"
      ],
      "explanation": "CDMA allows multiple users to share the same time and frequency simultaneously using unique spreading codes.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main characteristic of mm-wave communication?",
      "options": [
        "Long range",
        "High atmospheric absorption",
        "Low data rates",
        "Simple antenna design"
      ],
      "explanation": "Millimeter wave communication suffers from high atmospheric absorption, requiring short-range communication with high directivity.",
      "correctAnswer": [1]
    },
    {
      "question": "Which duplexing method is more spectrum efficient?",
      "options": [
        "FDD",
        "TDD",
        "Both equal",
        "Neither"
      ],
      "explanation": "TDD is generally more spectrum efficient as it can dynamically allocate time for uplink and downlink based on traffic asymmetry.",
      "correctAnswer": [1]
    },
    {
      "question": "What does CoMP stand for in LTE-Advanced?",
      "options": [
        "Coordinated Multi-Point",
        "Combined Multi-Protocol",
        "Centralized Multi-Processing",
        "Common Multi-Platform"
      ],
      "explanation": "CoMP stands for Coordinated Multi-Point, a technique where multiple cells coordinate to improve performance.",
      "correctAnswer": [0]
    },
    {
      "question": "Which technique helps combat fast fading in mobile channels?",
      "options": [
        "Power control",
        "Diversity techniques",
        "Error correction",
        "Frequency hopping"
      ],
      "explanation": "Diversity techniques (time, frequency, spatial) help combat fast fading by providing multiple independent signal paths.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the primary purpose of interleaving in digital communication?",
      "options": [
        "Increase data rate",
        "Reduce bandwidth",
        "Combat burst errors",
        "Improve modulation"
      ],
      "explanation": "Interleaving rearranges data to spread burst errors over time, making them easier to correct with error correction codes.",
      "correctAnswer": [2]
    },
    {
      "question": "Which 5G deployment scenario provides the highest data rates?",
      "options": [
        "Wide area coverage",
        "Dense urban",
        "Hot spot",
        "Rural coverage"
      ],
      "explanation": "Hot spot deployment scenarios use high-frequency bands and dense networks to provide the highest data rates in 5G.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main function of RRC in LTE?",
      "options": [
        "Data transmission",
        "Radio resource control",
        "Authentication",
        "Billing"
      ],
      "explanation": "RRC (Radio Resource Control) manages radio resources, connection establishment, and mobility in LTE networks.",
      "correctAnswer": [1]
    },
    {
      "question": "Which antenna configuration provides the highest gain?",
      "options": [
        "Omnidirectional",
        "Directional",
        "Isotropic",
        "Loop"
      ],
      "explanation": "Directional antennas provide the highest gain by concentrating energy in specific directions rather than radiating uniformly.",
      "correctAnswer": [1]
    },
    {
      "question": "What is massive MIMO?",
      "options": [
        "2x2 antenna configuration",
        "4x4 antenna configuration",
        "Large number of antenna elements",
        "Single antenna system"
      ],
      "explanation": "Massive MIMO uses a large number of antenna elements (typically 64 or more) to improve spectral efficiency and energy efficiency.",
      "correctAnswer": [2]
    },
    {
      "question": "Which protocol is used for 5G radio interface?",
      "options": [
        "LTE",
        "NR (New Radio)",
        "UMTS",
        "GSM"
      ],
      "explanation": "5G NR (New Radio) is the radio access technology and air interface standard for 5G networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the main advantage of small cells in cellular networks?",
      "options": [
        "Wider coverage",
        "Higher capacity",
        "Lower cost",
        "Simpler deployment"
      ],
      "explanation": "Small cells increase network capacity by providing additional coverage in high-traffic areas and enabling frequency reuse.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technique is used to combat multipath fading in OFDM?",
      "options": [
        "Power control",
        "Cyclic prefix",
        "Frequency hopping",
        "Time interleaving"
      ],
      "explanation": "Cyclic prefix in OFDM helps combat multipath fading and inter-symbol interference by providing a guard time.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the key benefit of software-defined networking (SDN) in 5G?",
      "options": [
        "Hardware acceleration",
        "Network flexibility and programmability",
        "Reduced latency",
        "Higher bandwidth"
      ],
      "explanation": "SDN provides network flexibility and programmability by separating control plane from data plane, enabling dynamic network management.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation is commonly used in satellite communication?",
      "options": [
        "AM",
        "FM",
        "PSK",
        "ASK"
      ],
      "explanation": "PSK modulation is commonly used in satellite communication due to its robustness against noise and interference.",
      "correctAnswer": [2]
    },
    {
      "question": "What is link budget in wireless communication?",
      "options": [
        "Financial cost calculation",
        "Power balance calculation",
        "Bandwidth allocation",
        "Time scheduling"
      ],
      "explanation": "Link budget is a power balance calculation that accounts for all gains and losses in a communication link to ensure adequate signal reception.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technique allows dynamic spectrum sharing in 5G?",
      "options": [
        "Fixed spectrum allocation",
        "Cognitive radio",
        "Static frequency planning",
        "Manual spectrum management"
      ],
      "explanation": "Cognitive radio and dynamic spectrum access techniques allow flexible and efficient spectrum sharing in 5G networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the main purpose of pilot signals in OFDM?",
      "options": [
        "Data transmission",
        "Channel estimation",
        "Error correction",
        "Power control"
      ],
      "explanation": "Pilot signals are known reference signals used for channel estimation, synchronization, and equalization in OFDM systems.",
      "correctAnswer": [1]
    },
    {
      "question": "Which access method provides better interference management?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA with interference cancellation",
        "Random access"
      ],
      "explanation": "CDMA with interference cancellation techniques can provide better interference management through signal processing.",
      "correctAnswer": [2]
    },
    {
      "question": "What is network function virtualization (NFV) in 5G?",
      "options": [
        "Hardware optimization",
        "Running network functions on standard hardware",
        "Physical network expansion",
        "Frequency virtualization"
      ],
      "explanation": "NFV allows network functions to run as software on standard hardware instead of dedicated hardware appliances.",
      "correctAnswer": [1]
    },
    {
      "question": "Which parameter determines the coverage area of a cell?",
      "options": [
        "Antenna gain only",
        "Transmit power only",
        "Path loss and sensitivity",
        "Frequency only"
      ],
      "explanation": "Cell coverage is determined by path loss characteristics and receiver sensitivity, which depend on various factors including frequency, power, and environment.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main benefit of beamforming in 5G?",
      "options": [
        "Omnidirectional coverage",
        "Focused signal transmission",
        "Reduced antenna size",
        "Lower frequency operation"
      ],
      "explanation": "Beamforming focuses signal transmission in specific directions, improving signal quality and reducing interference.",
      "correctAnswer": [1]
    },
    {
      "question": "Which duplex mode is preferred for 5G NR?",
      "options": [
        "FDD only",
        "TDD only",
        "Both FDD and TDD",
        "Neither"
      ],
      "explanation": "5G NR supports both FDD and TDD modes, but TDD is often preferred for its flexibility in handling asymmetric traffic.",
      "correctAnswer": [2]
    },
    {
      "question": "What enables ultra-high data rates in 5G?",
      "options": [
        "Lower frequencies only",
        "Wider bandwidth and advanced techniques",
        "Simpler modulation",
        "Reduced antenna complexity"
      ],
      "explanation": "5G achieves ultra-high data rates through wider bandwidth, advanced modulation, massive MIMO, and higher frequency bands.",
      "correctAnswer": [1]
    },
    {
"question": "Which category of transmission media uses a physical path like cables or wires?",
"options": [
"Guided media",
"Unguided media",
"Satellite media",
"Quantum media"
],
"explanation": "Guided (wired/bounded) media transmit signals through a physical path such as cables or wires. ",
"correctAnswer": [0]
},
{
"question": "Unshielded Twisted Pair (UTP) cables are typically used for:",
"options": [
"Long-haul submarine links",
"LANs with up to ~100 m runs",
"Deep-space communication",
"High-power RF transmission"
],
"explanation": "UTP is cheaper, commonly used in LANs, and typically supports 1–10 Gbps up to about 100 meters. ",
"correctAnswer": [1]
},
{
"question": "Shielded Twisted Pair (STP) differs from UTP primarily because STP:",
"options": [
"Uses fiber instead of copper",
"Has additional shielding to reduce noise",
"Cannot support Gigabit speeds",
"Is wireless"
],
"explanation": "STP includes an additional shield that reduces noise and can improve data security/speed relative to UTP. ",
"correctAnswer": [1]
},
{
"question": "Which transmission medium provides better shielding and higher bandwidth than twisted pair?",
"options": [
"Coaxial cable",
"Infrared link",
"Microwave link",
"UTP cable"
],
"explanation": "Coaxial cable has a central conductor, insulation, and metal shielding, offering better shielding and higher bandwidth than twisted pair. ",
"correctAnswer": [0]
},
{
"question": "Which is the fastest data-transferring wired medium and is immune to electromagnetic interference?",
"options": [
"UTP",
"STP",
"Coaxial cable",
"Optical fiber"
],
"explanation": "Optical fiber uses light, supports very high bandwidth, long distances, and is immune to electromagnetic interference. ",
"correctAnswer": [3]
},
{
"question": "Single Mode Fiber (SMF) is primarily used for:",
"options": [
"Short-distance links only",
"Long-distance transmission",
"Analog TV distribution only",
"Wireless backhaul only"
],
"explanation": "SMF is designed for long-distance transmission, while MMF is used for shorter distances. ",
"correctAnswer": [1]
},
{
"question": "Which category of transmission media uses electromagnetic waves without a physical conductor?",
"options": [
"Wired media",
"Guided media",
"Unguided (wireless) media",
"Shielded media"
],
"explanation": "Unguided media transmit data through free space using electromagnetic waves and are also called unbounded media. ",
"correctAnswer": [2]
},
{
"question": "Microwave links typically require which condition for reliable communication?",
"options": [
"Underwater conduits",
"Line-of-sight alignment between endpoints",
"High humidity environments",
"Noisy urban corridors"
],
"explanation": "Microwave communication generally requires line-of-sight between transmitter and receiver, often with directional antennas. ",
"correctAnswer": [1]
},
{
"question": "Infrared communication is best characterized by:",
"options": [
"Long-range and penetrates walls",
"Short-range and blocked by obstacles",
"Global coverage via satellites",
"Undersea cable replacement"
],
"explanation": "Infrared is short-range and cannot pass through walls; obstacles hinder the signal (e.g., TV remote). ",
"correctAnswer": [1]
},
{
"question": "Radio waves are described as:",
"options": [
"Highly directional only",
"Omni-directional and easy to generate/use",
"Confined to optical fibers",
"Ineffective for mobile phones"
],
"explanation": "Radio waves are electromagnetic waves that can travel in all directions and are easy to generate; used in FM radio, TV, and mobiles. ",
"correctAnswer": [1]
},
{
"question": "Which wireless technology provides global coverage using orbiting platforms?",
"options": [
"Infrared",
"Bluetooth",
"Satellite communication",
"Wi-Fi only"
],
"explanation": "Satellite communication uses satellites to cover very large areas (global), supporting GPS, weather, and international broadcasting. ",
"correctAnswer": [2]
},
{
"question": "In the electromagnetic spectrum, as frequency increases, wavelength:",
"options": [
"Increases",
"Decreases",
"Stays constant",
"Becomes negative"
],
"explanation": "Frequency and wavelength are inversely related: moving left to right, frequency increases and wavelength decreases. ",
"correctAnswer": [1]
},
{
"question": "Digital electronics primarily deals with signals that:",
"options": [
"Continuously vary over time",
"Have two discrete states 0 and 1",
"Are only analog",
"Are only optical"
],
"explanation": "Digital electronics uses digital signals with two states: 0 (Low/OFF) and 1 (High/ON). ",
"correctAnswer": [1]
},
{
"question": "Which is NOT an advantage of digital electronics over analog according to the notes?",
"options": [
"High noise immunity",
"Easy storage and processing",
"More reliable and flexible",
"Requires large antennas"
],
"explanation": "Advantages include noise immunity, easy storage/processing, reliability, encryption; large antennas relate to low-frequency baseband, not a digital advantage. ",
"correctAnswer": [3]
},
{
"question": "Which gates are universal and can implement any logic circuit?",
"options": [
"AND and OR",
"XOR and XNOR",
"NAND and NOR",
"NOT and XOR"
],
"explanation": "NAND and NOR are universal gates; any logic circuit can be constructed using only one of them. ",
"correctAnswer": [2]
},
{
"question": "Combinational circuits' outputs depend on:",
"options": [
"Present inputs only",
"Past inputs only",
"Clock history only",
"Noise levels only"
],
"explanation": "Combinational circuits produce outputs based solely on current inputs; sequential circuits depend on inputs plus past state. ",
"correctAnswer": [0]
},
{
"question": "Which is a basic memory element used in sequential circuits?",
"options": [
"Multiplexer",
"Decoder",
"Flip-flop",
"Adder"
],
"explanation": "Flip-flops (SR, JK, D, T) are the fundamental memory elements in sequential circuits; registers are groups of flip-flops. ",
"correctAnswer": [2]
},
{
"question": "Which number system uses digits 0–9 and A–F?",
"options": [
"Octal",
"Binary",
"Decimal",
"Hexadecimal"
],
"explanation": "Hexadecimal (base 16) uses digits 0–9 and letters A–F to represent values 10–15. ",
"correctAnswer": [3]
},
{
"question": "Frequency (in Hz) is defined as:",
"options": [
"Cycles per minute",
"Cycles per second",
"Voltage per ampere",
"Distance per time"
],
"explanation": "Frequency is the number of signal cycles per second, measured in Hertz (Hz); f = 1/T. ",
"correctAnswer": [1]
},
{
"question": "Bandwidth (BW) of a channel is computed as:",
"options": [
"BW = f_low − f_high",
"BW = f_high − f_low",
"BW = f_high × f_low",
"BW = f_high / f_low"
],
"explanation": "Bandwidth equals the difference between the highest and lowest frequencies passed by the channel: BW = f_high − f_low. ",
"correctAnswer": [1]
},
{
"question": "Common power supply frequency in India is:",
"options": [
"60 Hz",
"50 Hz",
"100 Hz",
"25 Hz"
],
"explanation": "The notes state 50 Hz for India and 60 Hz for the USA. ",
"correctAnswer": [1]
},
{
"question": "One main reason for using modulation instead of baseband transmission is:",
"options": [
"To increase antenna size",
"To reduce required antenna size",
"To make signals purely analog",
"To eliminate carriers entirely"
],
"explanation": "Modulation reduces required antenna size (λ/4 rule), enables long-distance transmission, multiplexing, and noise reduction. ",
"correctAnswer": [1]
},
{
"question": "In Amplitude Modulation (AM), which parameter varies with the message signal?",
"options": [
"Carrier frequency",
"Carrier phase",
"Carrier amplitude",
"Sampling rate"
],
"explanation": "AM varies the carrier's amplitude according to the message, keeping frequency and phase constant; AM bandwidth ≈ 2f_m. ",
"correctAnswer": [2]
},
{
"question": "Carson's Rule for FM bandwidth is approximately:",
"options": [
"BW ≈ 2(Δf + f_m)",
"BW ≈ Δf / f_m",
"BW ≈ 2πΔf",
"BW ≈ f_c − f_m"
],
"explanation": "For Frequency Modulation, Carson's Rule gives approximate bandwidth: BW ≈ 2(Δf + f_m). ",
"correctAnswer": [0]
},
{
"question": "Phase Modulation (PM) is most similar to:",
"options": [
"ASK",
"FSK",
"FM (both are angular modulation)",
"PAM"
],
"explanation": "PM and FM are both forms of angular modulation; PM varies phase with the message signal. ",
"correctAnswer": [2]
},
{
"question": "A typical AM broadcast band given in the notes is:",
"options": [
"88–108 MHz",
"535–1605 kHz",
"2.4–2.5 GHz",
"300 GHz–400 THz"
],
"explanation": "AM radio band is cited as 535 kHz to 1605 kHz; FM radio is 88–108 MHz. ",
"correctAnswer": [1]
},
{
"question": "Which digital modulation changes the carrier's amplitude with binary data?",
"options": [
"ASK",
"FSK",
"PSK",
"QAM only"
],
"explanation": "Amplitude Shift Keying (ASK) maps bit values to different carrier amplitudes (e.g., 1 = high amplitude, 0 = low). ",
"correctAnswer": [0]
},
{
"question": "In Frequency Shift Keying (FSK), bit '1' and '0' are represented by:",
"options": [
"Two different phases",
"Two different frequencies",
"Two different amplitudes",
"Two different time slots"
],
"explanation": "FSK uses two distinct frequencies (f1, f0) to represent binary 1 and 0. ",
"correctAnswer": [1]
},
{
"question": "Which modulation varies the phase of the carrier according to data bits?",
"options": [
"PSK",
"ASK",
"FSK",
"PWM"
],
"explanation": "Phase Shift Keying (PSK) alters the carrier's phase based on the digital input; variants include BPSK and QPSK. ",
"correctAnswer": [0]
},
{
"question": "QAM combines which two modulation dimensions to increase data rate?",
"options": [
"Frequency and time",
"Space and code",
"Amplitude and phase",
"Time and code"
],
"explanation": "Quadrature Amplitude Modulation varies both amplitude and phase using I/Q components to convey multiple bits per symbol. ",
"correctAnswer": [2]
},
{
"question": "How many bits per symbol does 16-QAM carry (as described)?",
"options": [
"2 bits",
"3 bits",
"4 bits",
"6 bits"
],
"explanation": "16-QAM has 16 constellation points, representing 4 bits per symbol; 64-QAM uses 6 bits per symbol. ",
"correctAnswer": [2]
},
{
"question": "A key trade-off of higher-order QAM (e.g., 256-QAM) is that it:",
"options": [
"Requires lower SNR",
"Is more noise-sensitive and needs better SNR",
"Uses less complex receivers",
"Cannot be used in Wi-Fi or LTE"
],
"explanation": "Higher-order QAM packs more bits per symbol but is more sensitive to noise and demands higher SNR and more complex receivers. ",
"correctAnswer": [1]
},
{
"question": "Pulse Amplitude Modulation (PAM) varies which attribute of the pulse?",
"options": [
"Width",
"Position",
"Amplitude",
"Phase"
],
"explanation": "In PAM, the amplitude (height) of regularly spaced pulses is varied with the message signal; used as a step in PCM. ",
"correctAnswer": [2]
},
{
"question": "Pulse Width Modulation (PWM) changes a pulse's:",
"options": [
"Amplitude only",
"Width (duration)",
"Center frequency",
"Phase angle"
],
"explanation": "PWM varies the pulse width in proportion to the modulating signal while amplitude remains constant. ",
"correctAnswer": [1]
},
{
"question": "Pulse Position Modulation (PPM) encodes information in:",
"options": [
"Pulse amplitude",
"Pulse width",
"Pulse time position",
"Pulse frequency"
],
"explanation": "PPM shifts the time position of each pulse according to the message, with amplitude and width held constant. ",
"correctAnswer": [2]
},
{
"question": "Which pulse technique is DIGITAL and involves sampling, quantization, and encoding?",
"options": [
"PAM",
"PWM",
"PPM",
"PCM"
],
"explanation": "Pulse Code Modulation (PCM) is a digital method with steps: sampling, quantization, and encoding; used in telephony and audio. ",
"correctAnswer": [3]
},
{
"question": "Which is a reason listed for the need for modulation?",
"options": [
"To avoid multiplexing",
"To increase noise susceptibility",
"To support long-distance transmission",
"To remove carriers from signals"
],
"explanation": "Motivations include smaller antennas, long-distance transmission, multiplexing, noise reduction, and better signal quality. ",
"correctAnswer": [2]
},
{
"question": "Which multiple access technique assigns separate frequency bands to each user?",
"options": [
"FDMA",
"TDMA",
"CDMA",
"SDMA"
],
"explanation": "FDMA allocates distinct frequency bands to users; simple but can waste bandwidth if a user is idle. ",
"correctAnswer": [0]
},
{
"question": "Time Division Multiple Access (TDMA) works by:",
"options": [
"Giving each user a unique code simultaneously",
"Allowing users to transmit in different time slots on the same frequency",
"Providing separate spatial beams per user",
"Assigning multiple orthogonal subcarriers per user"
],
"explanation": "TDMA shares the same frequency channel among users by dividing transmission into distinct time slots; requires precise timing. ",
"correctAnswer": [1]
},
{
"question": "CDMA separates users primarily by:",
"options": [
"Time slots",
"Unique spreading codes",
"Geographic cells only",
"Antenna polarization"
],
"explanation": "CDMA lets all users share the same time and frequency but separates them via unique codes; it is relatively interference-resistant. ",
"correctAnswer": [1]
},
{
"question": "OFDMA improves spectral efficiency using:",
"options": [
"Single wideband carrier only",
"Orthogonal subcarriers allocated to users",
"Only time slotting",
"Only space division"
],
"explanation": "OFDMA assigns multiple orthogonal subcarriers to users, offering high efficiency and lower interference; used in LTE/ Wi-Fi 6/5G. ",
"correctAnswer": [1]
},
{
"question": "SDMA (Space Division Multiple Access) leverages:",
"options": [
"Unique codes only",
"Different time slots",
"Multiple antennas and beamforming",
"Separate optical fibers"
],
"explanation": "SDMA uses spatial separation via multiple antennas (MIMO) and beamforming to serve users simultaneously. ",
"correctAnswer": [2]
},
{
"question": "In a cellular system, the Mobile Station (MS) consists of:",
"options": [
"Only the battery pack",
"Base Transceiver Station and antennas",
"Mobile Equipment and SIM card",
"Only the Mobile Switching Center"
],
"explanation": "MS includes the Mobile Equipment (hardware) and the SIM, which holds identity/authentication data (IMSI, services). ",
"correctAnswer": [2]
},
{
"question": "Which component controls multiple BTSs and manages handovers and channel allocation?",
"options": [
"HLR",
"BSC (Base Station Controller)",
"VLR",
"MSC (Mobile Switching Center)"
],
"explanation": "Within the base station subsystem, the BSC controls multiple BTSs, handling functions like handover and channel allocation. ",
"correctAnswer": [1]
},
{
"question": "Frequency reuse in cellular networks aims to:",
"options": [
"Eliminate co-channel interference completely",
"Reuse the same channels in sufficiently separated cells for capacity",
"Use each frequency only once in the network",
"Avoid hexagonal cell planning"
],
"explanation": "Frequency reuse assigns the same set of channels to cells spaced far enough apart to limit interference, improving capacity with limited spectrum. ",
"correctAnswer": [1]
},
{
"question": "In GSM-style hard handover, the connection behavior is best described as:",
"options": [
"Make-before-break",
"Break-before-make",
"Simultaneous dual connection indefinitely",
"No change in serving base station"
],
"explanation": "Hard handover is 'break before make' (old connection is released before the new one is established). Soft handover is the reverse and used in CDMA. ",
"correctAnswer": [1]
},
{
"question": "Which of the following is a combinational circuit example from the notes?",
"options": [
"Register",
"Counter",
"Multiplexer (MUX)",
"Flip-flop"
],
"explanation": "Multiplexers, adders, encoders/decoders are combinational; registers and counters are sequential (memory involved). ",
"correctAnswer": [2]
},
{
"question": "Which statement about AM and FM in the notes is correct?",
"options": [
"AM varies frequency; FM varies amplitude",
"AM and FM both vary phase",
"AM varies amplitude; FM varies frequency",
"Neither use a carrier"
],
"explanation": "AM changes carrier amplitude; FM changes carrier frequency. Phases remain constant in these simplified descriptions. ",
"correctAnswer": [2]
},
{
"question": "According to the notes, FM is favored for audio because it offers:",
"options": [
"Lowest bandwidth at any quality",
"High noise immunity and better sound quality",
"No need for carrier synchronization ever",
"Compatibility only with analog receivers"
],
"explanation": "FM provides higher noise immunity and better sound quality relative to AM; bandwidth estimated via Carson's Rule. ",
"correctAnswer": [1]
},
{
"question": "Which wireless band from the notes corresponds to typical FM radio broadcasts?",
"options": [
"88–108 MHz",
"535–1605 kHz",
"1–10 GHz",
"300 GHz–400 THz"
],
"explanation": "FM radio band is 88–108 MHz; AM is 535–1605 kHz. ",
"correctAnswer": [0]
},
{
"question": "Which statement best matches PCM's application area?",
"options": [
"Only motor control and power regulation",
"Digital telephony and computer audio/video",
"Only short-range remote controls",
"Analog cable TV transmission"
],
"explanation": "PCM is used in digital telephony and digital audio/video formats (e.g., CDs/MP3 workflows). ",
"correctAnswer": [1]
}
],
    passage_based_questions: {
     "passage_1": {
      "title": "Communication System Fundamentals",
      "passage": "A communication system is designed to transfer information from a source to a destination. The basic components include a transmitter that converts the information signal into a form suitable for transmission, a communication channel that carries the signal from transmitter to receiver, and a receiver that reconstructs the original information signal. The channel can be either wired (using physical cables like twisted pair, coaxial, or optical fiber) or wireless (using electromagnetic waves). The choice between wired and wireless depends on factors such as mobility requirements, installation costs, bandwidth needs, and security considerations.",
      "questions": [
        {
          "question": "What is the primary function of a transmitter in a communication system?",
          "options": [
            "To convert information signal into transmittable form",
            "To amplify the received signal",
            "To filter unwanted noise",
            "To demodulate the carrier wave"
          ],
          "explanation": "The transmitter's main role is to convert the information signal into a form suitable for transmission over the communication channel.",
          "correctAnswer": [0]
        },
        {
          "question": "Which of the following is NOT a basic component of a communication system?",
          "options": [
            "Transmitter",
            "Amplifier",
            "Channel",
            "Receiver"
          ],
          "explanation": "While amplifiers may be present in communication systems, they are not considered one of the three basic fundamental components: transmitter, channel, and receiver.",
          "correctAnswer": [1]
        },
        {
          "question": "What type of communication channel uses electromagnetic waves?",
          "options": [
            "Wired channel",
            "Wireless channel",
            "Optical fiber",
            "Coaxial cable"
          ],
          "explanation": "Wireless channels utilize electromagnetic waves to transmit information without physical connections.",
          "correctAnswer": [1]
        },
        {
          "question": "Which factor is most important when choosing between wired and wireless communication?",
          "options": [
            "Color of the equipment",
            "Mobility requirements",
            "Brand of manufacturer",
            "Time of day"
          ],
          "explanation": "Mobility requirements are a crucial factor in determining whether to use wired or wireless communication systems.",
          "correctAnswer": [1]
        },
        {
          "question": "What does the communication channel do in a communication system?",
          "options": [
            "Generates the information signal",
            "Carries signal from transmitter to receiver",
            "Converts analog to digital signals",
            "Provides power to the system"
          ],
          "explanation": "The communication channel serves as the medium that carries the signal from the transmitter to the receiver.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_2": {
      "title": "Electromagnetic Spectrum and Wave Properties",
      "passage": "The electromagnetic spectrum encompasses all electromagnetic radiation, from extremely low-frequency radio waves to high-energy gamma rays. Electromagnetic waves are characterized by their frequency, wavelength, and energy content. They travel at the speed of light (3×10^8 m/s) in vacuum and do not require a physical medium for propagation. Different regions of the spectrum are utilized for various communication applications: radio waves for broadcasting and mobile communications, microwaves for satellite communications and radar, infrared for remote controls and fiber optics, visible light for optical communications, and higher frequency regions for specialized applications.",
      "questions": [
        {
          "question": "What is the speed of electromagnetic waves in vacuum?",
          "options": [
            "3×10^6 m/s",
            "3×10^8 m/s",
            "3×10^10 m/s",
            "3×10^12 m/s"
          ],
          "explanation": "Electromagnetic waves travel at the speed of light, which is approximately 3×10^8 meters per second in vacuum.",
          "correctAnswer": [1]
        },
        {
          "question": "Which electromagnetic waves have the highest energy?",
          "options": [
            "Radio waves",
            "Microwaves",
            "X-rays",
            "Gamma rays"
          ],
          "explanation": "Gamma rays have the highest frequency and therefore the highest energy in the electromagnetic spectrum.",
          "correctAnswer": [3]
        },
        {
          "question": "Do electromagnetic waves require a medium for propagation?",
          "options": [
            "Yes, they need air",
            "Yes, they need water",
            "No, they can travel through vacuum",
            "Only for long distances"
          ],
          "explanation": "Electromagnetic waves do not require a physical medium and can propagate through vacuum, unlike mechanical waves.",
          "correctAnswer": [2]
        },
        {
          "question": "Which part of the electromagnetic spectrum is used for satellite communications?",
          "options": [
            "Radio waves",
            "Microwaves",
            "Infrared",
            "Visible light"
          ],
          "explanation": "Microwaves are commonly used for satellite communications due to their ability to penetrate the atmosphere effectively.",
          "correctAnswer": [1]
        },
        {
          "question": "What characterizes electromagnetic waves?",
          "options": [
            "Only frequency",
            "Only wavelength",
            "Frequency, wavelength, and energy",
            "Only energy content"
          ],
          "explanation": "Electromagnetic waves are characterized by their frequency, wavelength, and energy content, which are all interrelated.",
          "correctAnswer": [2]
        }
      ]
    },
    "passage_3": {
      "title": "Amplitude Modulation and Frequency Modulation",
      "passage": "Modulation is the process of varying one or more properties of a high-frequency carrier wave in accordance with a lower-frequency information signal. In Amplitude Modulation (AM), the amplitude of the carrier wave is varied while keeping the frequency constant. AM is simple to implement and provides good long-range propagation, but it is susceptible to noise and interference. Frequency Modulation (FM) varies the frequency of the carrier wave while keeping the amplitude constant. FM provides better sound quality and noise immunity compared to AM, but requires more complex circuitry and has limited range. AM is still used for long-distance broadcasting and aviation communications, while FM is preferred for high-fidelity audio broadcasting and two-way radio communications.",
      "questions": [
        {
          "question": "In Amplitude Modulation, which property of the carrier wave is varied?",
          "options": [
            "Frequency",
            "Phase",
            "Amplitude",
            "Wavelength"
          ],
          "explanation": "In AM, the amplitude of the carrier wave is varied according to the information signal while frequency remains constant.",
          "correctAnswer": [2]
        },
        {
          "question": "Why is FM less susceptible to noise compared to AM?",
          "options": [
            "FM uses higher power",
            "Noise typically affects amplitude, not frequency",
            "FM uses digital signals",
            "FM has wider bandwidth"
          ],
          "explanation": "Most noise affects the amplitude of signals, so FM, which varies frequency rather than amplitude, is less affected by noise.",
          "correctAnswer": [1]
        },
        {
          "question": "What is a key advantage of AM over FM?",
          "options": [
            "Better sound quality",
            "Noise immunity",
            "Simpler implementation and long-range coverage",
            "Wider bandwidth"
          ],
          "explanation": "AM is simpler to implement and provides better long-range propagation characteristics compared to FM.",
          "correctAnswer": [2]
        },
        {
          "question": "Which modulation technique is preferred for high-fidelity audio?",
          "options": [
            "AM",
            "FM",
            "Both are equal",
            "Neither"
          ],
          "explanation": "FM provides better sound quality and is preferred for high-fidelity audio applications due to its noise immunity.",
          "correctAnswer": [1]
        },
        {
          "question": "What remains constant in Frequency Modulation?",
          "options": [
            "Frequency",
            "Amplitude",
            "Phase",
            "Power"
          ],
          "explanation": "In FM, the amplitude of the carrier wave remains constant while the frequency is varied according to the information signal.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_4": {
      "title": "Digital Modulation Techniques",
      "passage": "Digital modulation techniques are essential for modern communication systems as they provide better noise immunity, efficient spectrum utilization, and compatibility with digital processing. Phase Shift Keying (PSK) varies the phase of the carrier wave to represent digital bits. Binary PSK (BPSK) uses two phase states to represent 0 and 1, while Quadrature PSK (QPSK) uses four phase states to transmit two bits per symbol. Quadrature Amplitude Modulation (QAM) combines both amplitude and phase variations to encode multiple bits per symbol. Higher-order modulations like 64-QAM and 256-QAM achieve greater spectral efficiency but are more sensitive to noise and require more complex implementation.",
      "questions": [
        {
          "question": "How many phase states are used in BPSK?",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "explanation": "Binary PSK (BPSK) uses two phase states to represent the binary digits 0 and 1.",
          "correctAnswer": [1]
        },
        {
          "question": "Which modulation technique combines both amplitude and phase variations?",
          "options": [
            "PSK",
            "ASK",
            "QAM",
            "FSK"
          ],
          "explanation": "Quadrature Amplitude Modulation (QAM) varies both the amplitude and phase of the carrier wave to encode data.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the main advantage of QPSK over BPSK?",
          "options": [
            "Lower complexity",
            "Better noise immunity",
            "Transmits twice the data rate using same bandwidth",
            "Uses less power"
          ],
          "explanation": "QPSK can transmit 2 bits per symbol compared to BPSK's 1 bit per symbol, effectively doubling the data rate in the same bandwidth.",
          "correctAnswer": [2]
        },
        {
          "question": "How many bits does each symbol represent in 64-QAM?",
          "options": [
            "4",
            "5",
            "6",
            "8"
          ],
          "explanation": "64-QAM has 64 possible symbol states, which equals 2^6, so each symbol represents 6 bits.",
          "correctAnswer": [2]
        },
        {
          "question": "What is a trade-off of using higher-order QAM modulations?",
          "options": [
            "Lower data rates",
            "Simpler implementation",
            "Greater sensitivity to noise",
            "Wider bandwidth requirement"
          ],
          "explanation": "Higher-order QAM modulations achieve higher data rates but become more sensitive to noise and interference.",
          "correctAnswer": [2]
        }
      ]
    },
    "passage_5": {
      "title": "Multiple Access Techniques in Cellular Systems",
      "passage": "Multiple access techniques allow multiple users to share communication resources efficiently. Frequency Division Multiple Access (FDMA) assigns different frequency bands to different users. Time Division Multiple Access (TDMA) allows users to share the same frequency by transmitting in different time slots. Code Division Multiple Access (CDMA) enables multiple users to transmit simultaneously on the same frequency using unique spreading codes. Orthogonal Frequency Division Multiple Access (OFDMA) combines OFDM with multiple access, allowing subcarriers to be allocated to different users. Space Division Multiple Access (SDMA) uses directional antennas or beamforming to separate users spatially. Each technique has specific advantages and is suitable for different applications and network requirements.",
      "questions": [
        {
          "question": "Which multiple access technique assigns different frequency bands to users?",
          "options": [
            "TDMA",
            "FDMA",
            "CDMA",
            "SDMA"
          ],
          "explanation": "Frequency Division Multiple Access (FDMA) separates users by assigning different frequency bands to each user.",
          "correctAnswer": [1]
        },
        {
          "question": "In TDMA, how are users separated?",
          "options": [
            "By frequency",
            "By time slots",
            "By codes",
            "By space"
          ],
          "explanation": "Time Division Multiple Access (TDMA) allows users to share the same frequency by transmitting in different time slots.",
          "correctAnswer": [1]
        },
        {
          "question": "What allows multiple users to transmit simultaneously on the same frequency in CDMA?",
          "options": [
            "Time slots",
            "Frequency bands",
            "Unique spreading codes",
            "Power levels"
          ],
          "explanation": "CDMA uses unique spreading codes for each user, allowing simultaneous transmission on the same frequency.",
          "correctAnswer": [2]
        },
        {
          "question": "Which technique uses directional antennas to separate users?",
          "options": [
            "FDMA",
            "TDMA",
            "CDMA",
            "SDMA"
          ],
          "explanation": "Space Division Multiple Access (SDMA) uses directional antennas or beamforming to separate users spatially.",
          "correctAnswer": [3]
        },
        {
          "question": "What does OFDMA combine with multiple access?",
          "options": [
            "AM modulation",
            "FM modulation",
            "OFDM",
            "PSK modulation"
          ],
          "explanation": "OFDMA combines Orthogonal Frequency Division Multiplexing (OFDM) with multiple access capabilities.",
          "correctAnswer": [2]
        }
      ]
    },
    "passage_6": {
      "title": "Cellular System Concepts and Architecture",
      "passage": "Cellular systems are designed to provide wide-area coverage while efficiently utilizing the available spectrum through frequency reuse. The service area is divided into cells, each served by a base station. Frequency reuse allows the same frequencies to be used in non-adjacent cells without causing interference. Cell splitting is used to increase capacity by dividing large cells into smaller ones. Sectoring involves dividing cells into sectors using directional antennas to increase capacity and reduce interference. Handoff mechanisms ensure seamless connectivity as mobile users move between cells. The cellular concept enables networks to serve a large number of users with limited spectrum resources while maintaining acceptable service quality.",
      "questions": [
        {
          "question": "What is the main purpose of the cellular system concept?",
          "options": [
            "To increase transmission power",
            "To provide wide coverage with efficient spectrum use",
            "To reduce the number of base stations",
            "To eliminate the need for handoffs"
          ],
          "explanation": "The cellular concept aims to provide wide-area coverage while efficiently utilizing the available radio spectrum through frequency reuse.",
          "correctAnswer": [1]
        },
        {
          "question": "What is frequency reuse in cellular systems?",
          "options": [
            "Using the same frequency in all cells",
            "Using different frequencies in each cell",
            "Using the same frequencies in non-adjacent cells",
            "Never reusing frequencies"
          ],
          "explanation": "Frequency reuse allows the same frequencies to be used in non-adjacent cells without causing harmful interference.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the purpose of cell splitting?",
          "options": [
            "To reduce coverage area",
            "To increase capacity",
            "To eliminate interference",
            "To reduce power consumption"
          ],
          "explanation": "Cell splitting divides large cells into smaller ones to increase the capacity of the cellular network.",
          "correctAnswer": [1]
        },
        {
          "question": "How does sectoring help in cellular systems?",
          "options": [
            "By increasing cell size",
            "By using omnidirectional antennas",
            "By dividing cells into sectors with directional antennas",
            "By eliminating base stations"
          ],
          "explanation": "Sectoring divides cells into sectors using directional antennas to increase capacity and reduce interference.",
          "correctAnswer": [2]
        },
        {
          "question": "What ensures seamless connectivity as users move between cells?",
          "options": [
            "Frequency reuse",
            "Cell splitting",
            "Sectoring",
            "Handoff mechanisms"
          ],
          "explanation": "Handoff mechanisms ensure continuous service as mobile users move from one cell to another.",
          "correctAnswer": [3]
        }
      ]
    },
    "passage_7": {
      "title": "Signal Types and Properties",
      "passage": "Communication systems handle different types of signals, each with distinct characteristics and applications. Analog signals are continuous in both time and amplitude, representing information through smooth variations. They are susceptible to noise and degradation during transmission and processing. Digital signals are discrete in nature, representing information using distinct levels or states (typically binary). Digital signals offer better noise immunity, easier processing, and more efficient storage compared to analog signals. Optical signals use light as the carrier medium, typically in fiber optic communications. They provide very high bandwidth, low loss over long distances, and immunity to electromagnetic interference. The choice of signal type depends on the application requirements, including bandwidth needs, noise environment, and system complexity.",
      "questions": [
        {
          "question": "What characterizes analog signals?",
          "options": [
            "Discrete time and amplitude",
            "Continuous time and amplitude",
            "Digital representation",
            "Binary states only"
          ],
          "explanation": "Analog signals are continuous in both time and amplitude, representing information through smooth variations.",
          "correctAnswer": [1]
        },
        {
          "question": "What is a major advantage of digital signals over analog signals?",
          "options": [
            "Larger size",
            "Higher power consumption",
            "Better noise immunity",
            "More complex processing"
          ],
          "explanation": "Digital signals offer better noise immunity compared to analog signals, making them more reliable for communication.",
          "correctAnswer": [2]
        },
        {
          "question": "What medium do optical signals use as a carrier?",
          "options": [
            "Radio waves",
            "Sound waves",
            "Light",
            "Microwaves"
          ],
          "explanation": "Optical signals use light as the carrier medium, typically employed in fiber optic communications.",
          "correctAnswer": [2]
        },
        {
          "question": "What is a key advantage of optical signals?",
          "options": [
            "Low bandwidth",
            "High loss over long distances",
            "Immunity to electromagnetic interference",
            "Simple equipment"
          ],
          "explanation": "Optical signals provide immunity to electromagnetic interference, along with high bandwidth and low loss characteristics.",
          "correctAnswer": [2]
        },
        {
          "question": "How do digital signals typically represent information?",
          "options": [
            "Through continuous variations",
            "Using distinct levels or states",
            "With analog waveforms",
            "Through frequency changes only"
          ],
          "explanation": "Digital signals represent information using distinct, discrete levels or states, typically in binary form.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_8": {
      "title": "Wired vs Wireless Communication Comparison",
      "passage": "The choice between wired and wireless communication depends on various factors and trade-offs. Wired communication offers high reliability, better security, higher bandwidth capabilities, and consistent performance. However, it requires physical infrastructure installation, has limited mobility, and involves higher installation costs. Wireless communication provides excellent mobility, flexible deployment, easier installation in difficult terrains, and supports a wide range of mobile devices. The disadvantages include susceptibility to interference, generally lower bandwidth compared to wired systems, security vulnerabilities, and variable performance depending on environmental conditions. Modern communication networks often employ hybrid approaches, combining wired backbone networks with wireless access points to leverage the advantages of both technologies.",
      "questions": [
        {
          "question": "What is a key advantage of wired communication?",
          "options": [
            "Easy mobility",
            "High reliability and security",
            "No installation required",
            "Works without power"
          ],
          "explanation": "Wired communication systems typically offer high reliability and better security compared to wireless systems.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the main advantage of wireless communication?",
          "options": [
            "Higher bandwidth",
            "Better security",
            "Mobility and flexibility",
            "Lower cost"
          ],
          "explanation": "The primary advantage of wireless communication is the mobility and flexibility it provides to users.",
          "correctAnswer": [2]
        },
        {
          "question": "What is a typical disadvantage of wireless systems?",
          "options": [
            "High installation costs",
            "Limited mobility",
            "Susceptibility to interference",
            "Requires physical cables"
          ],
          "explanation": "Wireless systems are generally more susceptible to interference from various sources compared to wired systems.",
          "correctAnswer": [2]
        },
        {
          "question": "How do modern networks often address the limitations of both wired and wireless?",
          "options": [
            "Use only wired connections",
            "Use only wireless connections",
            "Employ hybrid approaches combining both",
            "Avoid using either technology"
          ],
          "explanation": "Modern networks often use hybrid approaches that combine wired backbone infrastructure with wireless access to get benefits of both.",
          "correctAnswer": [2]
        },
        {
          "question": "Which factor affects wireless performance but not wired performance?",
          "options": [
            "Data rate",
            "Environmental conditions",
            "Power consumption",
            "Equipment cost"
          ],
          "explanation": "Environmental conditions such as weather, obstacles, and interference significantly affect wireless performance but have minimal impact on wired systems.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_9": {
      "title": "5G Technology and Applications",
      "passage": "5G represents the fifth generation of cellular network technology, designed to support three main use cases: Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communication (URLLC), and Massive Machine-Type Communication (mMTC). eMBB focuses on providing extremely high data rates and improved user experience for applications like 4K/8K video streaming and virtual reality. URLLC enables applications requiring very low latency and high reliability, such as autonomous vehicles and industrial automation. mMTC supports massive numbers of connected devices with extended battery life for IoT applications. 5G networks utilize advanced technologies including massive MIMO, beamforming, network slicing, and edge computing to achieve these diverse requirements simultaneously.",
      "questions": [
        {
          "question": "What does eMBB stand for in 5G technology?",
          "options": [
            "Enhanced Mobile Broadcasting",
            "Enhanced Mobile Broadband",
            "Extended Mobile Broadband",
            "Efficient Mobile Broadcasting"
          ],
          "explanation": "eMBB stands for Enhanced Mobile Broadband, one of the three main 5G use cases focused on high data rates.",
          "correctAnswer": [1]
        },
        {
          "question": "Which 5G use case is most suitable for autonomous vehicles?",
          "options": [
            "eMBB",
            "URLLC",
            "mMTC",
            "None of the above"
          ],
          "explanation": "URLLC (Ultra-Reliable Low-Latency Communication) is designed for applications requiring very low latency and high reliability like autonomous vehicles.",
          "correctAnswer": [1]
        },
        {
          "question": "What does mMTC focus on?",
          "options": [
            "High data rates",
            "Low latency",
            "Massive number of connected devices",
            "High mobility"
          ],
          "explanation": "mMTC (Massive Machine-Type Communication) supports massive numbers of connected devices, particularly for IoT applications.",
          "correctAnswer": [2]
        },
        {
          "question": "Which technology is NOT mentioned as being utilized by 5G networks?",
          "options": [
            "Massive MIMO",
            "Beamforming",
            "Analog modulation",
            "Network slicing"
          ],
          "explanation": "5G networks use advanced digital technologies; analog modulation is not a key 5G technology mentioned in modern cellular systems.",
          "correctAnswer": [2]
        },
        {
          "question": "What type of applications benefit most from eMBB?",
          "options": [
            "Industrial automation",
            "4K/8K video streaming and VR",
            "IoT sensor networks",
            "Basic voice calls"
          ],
          "explanation": "eMBB is designed for applications requiring very high data rates like 4K/8K video streaming and virtual reality.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_10": {
      "title": "Network Architecture Evolution and Core Components",
      "passage": "The evolution from 4G LTE to 5G involves significant changes in network architecture. 4G networks use eNodeB (evolved NodeB) as base stations connected to the Evolved Packet Core (EPC), which includes components like MME (Mobility Management Entity), SGW (Serving Gateway), and PGW (PDN Gateway). 5G introduces gNodeB as the new base station and implements a Service-Based Architecture (SBA) in the core network. The 5G core includes functions like AMF (Access and Mobility Management Function), SMF (Session Management Function), and UPF (User Plane Function). 5G deployment can be implemented in Non-Standalone (NSA) mode, leveraging existing 4G infrastructure, or Standalone (SA) mode with a fully independent 5G core network. This architectural evolution enables better flexibility, scalability, and support for diverse service requirements.",
      "questions": [
        {
          "question": "What is the base station called in 4G LTE networks?",
          "options": [
            "NodeB",
            "eNodeB",
            "gNodeB",
            "Base Station"
          ],
          "explanation": "4G LTE networks use eNodeB (evolved NodeB) as their base stations.",
          "correctAnswer": [1]
        },
        {
          "question": "What does AMF stand for in 5G core networks?",
          "options": [
            "Advanced Mobility Function",
            "Access and Mobility Management Function",
            "Automatic Management Function",
            "Access Management Framework"
          ],
          "explanation": "AMF stands for Access and Mobility Management Function, one of the key components in 5G core networks.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the difference between NSA and SA deployment modes?",
          "options": [
            "NSA uses 4G infrastructure, SA is fully independent 5G",
            "NSA is faster than SA",
            "SA uses 4G infrastructure, NSA is independent",
            "There is no difference"
          ],
          "explanation": "NSA (Non-Standalone) leverages existing 4G infrastructure, while SA (Standalone) uses fully independent 5G core network.",
          "correctAnswer": [0]
        },
        {
          "question": "What type of architecture does 5G core implement?",
          "options": [
            "Hierarchical Architecture",
            "Service-Based Architecture",
            "Centralized Architecture",
            "Distributed Architecture"
          ],
          "explanation": "5G core implements a Service-Based Architecture (SBA) which provides better flexibility and scalability.",
          "correctAnswer": [1]
        },
        {
          "question": "Which component is NOT part of the 4G EPC?",
          "options": [
            "MME",
            "SGW",
            "AMF",
            "PGW"
          ],
          "explanation": "AMF (Access and Mobility Management Function) is a 5G core component, not part of the 4G EPC (Evolved Packet Core).",
          "correctAnswer": [2]
        }
      ]
    },

  "passage_11": {
    "title": "Guided Media in Communication Systems",
    "passage": "Guided media refers to transmission that takes place through a physical path such as wires or cables. Examples include twisted pair cable, coaxial cable, and optical fiber. Twisted pair consists of two copper wires twisted together, available as UTP (Unshielded) and STP (Shielded). Coaxial cable has a central copper conductor, insulation, shielding, and outer cover. Optical fiber, made of glass or plastic, is the fastest medium, transmitting data as light.",
    "questions": [
      {
        "question": "Guided media is also called:",
        "options": [
          "Wireless media",
          "Bounded media",
          "Satellite channel",
          "Frequency band"
        ],
        "explanation": "Guided media is also known as bounded media because it uses physical boundaries (cables/wires) to contain and direct the transmission signal.",
        "correctAnswer": [1]
      },
      {
        "question": "Twisted pair consists of:",
        "options": [
          "Two copper wires twisted together",
          "A single copper wire",
          "Glass fiber",
          "Aluminum strip"
        ],
        "explanation": "Twisted pair cable is constructed using two copper wires that are twisted together to reduce electromagnetic interference.",
        "correctAnswer": [0]
      },
      {
        "question": "Which guided medium is fastest?",
        "options": [
          "Twisted pair",
          "Coaxial cable",
          "Optical fiber",
          "Copper wire"
        ],
        "explanation": "Optical fiber is the fastest guided medium as it transmits data using light signals, achieving much higher speeds than electrical signals in copper-based media.",
        "correctAnswer": [2]
      },
      {
        "question": "UTP cable is commonly used in:",
        "options": [
          "LAN",
          "Satellite communication",
          "Wi-Fi",
          "GPS"
        ],
        "explanation": "Unshielded Twisted Pair (UTP) cables are commonly used in Local Area Networks (LANs) for connecting devices within buildings.",
        "correctAnswer": [0]
      },
      {
        "question": "Coaxial cable is mainly used in:",
        "options": [
          "TV networks and broadband",
          "LAN only",
          "Wi-Fi",
          "Bluetooth"
        ],
        "explanation": "Coaxial cables are primarily used for television networks and broadband internet connections due to their good shielding and bandwidth characteristics.",
        "correctAnswer": [0]
      }
    ]
  },
  "passage_12": {
    "title": "Unguided Media in Communication Systems",
    "passage": "In unguided media, data is transmitted without any physical medium, using electromagnetic waves. Examples include radio waves, microwaves, infrared, and satellite communication. Radio waves are omnidirectional and used in FM radio, TV, and mobiles. Microwaves need line-of-sight and are used in Wi-Fi, Bluetooth, and satellites. Infrared is short-range, used in remotes and printers, but cannot pass through walls. Satellites cover large areas and support GPS, weather forecasting, and broadcasting.",
    "questions": [
      {
        "question": "Unguided media is also called:",
        "options": [
          "Wired media",
          "Bounded media",
          "Wireless media",
          "Digital media"
        ],
        "explanation": "Unguided media is also called wireless media because it transmits data without physical connections, using electromagnetic waves through air or space.",
        "correctAnswer": [2]
      },
      {
        "question": "Which wave is omni-directional?",
        "options": [
          "Microwave",
          "Radio wave",
          "Infrared",
          "Optical wave"
        ],
        "explanation": "Radio waves are omnidirectional, meaning they can propagate in all directions from the transmitter, making them suitable for broadcasting applications.",
        "correctAnswer": [1]
      },
      {
        "question": "Infrared waves are used in:",
        "options": [
          "Mobile phones",
          "Printers and remotes",
          "Satellites",
          "Wi-Fi towers"
        ],
        "explanation": "Infrared waves are commonly used in short-range applications like TV remotes and some printer connections due to their limited range and inability to pass through obstacles.",
        "correctAnswer": [1]
      },
      {
        "question": "Which requires line-of-sight?",
        "options": [
          "Radio waves",
          "Microwaves",
          "Infrared",
          "Optical fiber"
        ],
        "explanation": "Microwaves require line-of-sight communication, meaning there should be no physical obstructions between the transmitter and receiver for effective transmission.",
        "correctAnswer": [1]
      },
      {
        "question": "Satellite communication is used in:",
        "options": [
          "LAN",
          "GPS & international broadcasting",
          "Bluetooth",
          "Ethernet"
        ],
        "explanation": "Satellite communication provides wide area coverage and is extensively used for GPS navigation systems and international broadcasting services.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_13": {
    "title": "Modulation in Communication Systems",
    "passage": "Modulation is the process of varying a carrier signal in accordance with the information signal. It is necessary because low-frequency signals cannot travel long distances effectively. In Amplitude Modulation (AM), the amplitude of the carrier varies. In Frequency Modulation (FM), the frequency varies, and in Phase Modulation (PM), the phase varies. Digital modulation techniques include ASK, FSK, PSK, and QAM, which are widely used in Wi-Fi, 4G, and 5G.",
    "questions": [
      {
        "question": "Modulation is used to:",
        "options": [
          "Reduce bandwidth",
          "Transmit signals over long distances",
          "Increase antenna size",
          "Eliminate carriers"
        ],
        "explanation": "Modulation is primarily used to enable effective transmission of signals over long distances by converting low-frequency information signals to high-frequency carrier signals.",
        "correctAnswer": [1]
      },
      {
        "question": "In AM, which parameter of carrier changes?",
        "options": [
          "Frequency",
          "Amplitude",
          "Phase",
          "Wavelength"
        ],
        "explanation": "In Amplitude Modulation (AM), the amplitude of the carrier signal is varied in accordance with the information signal while frequency and phase remain constant.",
        "correctAnswer": [1]
      },
      {
        "question": "In FM, which parameter of carrier varies?",
        "options": [
          "Amplitude",
          "Frequency",
          "Phase",
          "Bandwidth"
        ],
        "explanation": "In Frequency Modulation (FM), the frequency of the carrier signal is varied according to the information signal while amplitude remains constant.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is NOT a digital modulation technique?",
        "options": [
          "ASK",
          "PSK",
          "AM",
          "QAM"
        ],
        "explanation": "AM (Amplitude Modulation) is an analog modulation technique, while ASK, PSK, and QAM are digital modulation techniques used for transmitting digital data.",
        "correctAnswer": [2]
      },
      {
        "question": "QAM is a combination of:",
        "options": [
          "AM + FM",
          "ASK + PSK",
          "FSK + PSK",
          "AM + PCM"
        ],
        "explanation": "QAM (Quadrature Amplitude Modulation) combines both Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK) to achieve higher data rates.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_14": {
    "title": "Pulse Modulation Techniques",
    "passage": "Pulse modulation transmits signals in the form of pulses instead of continuous waves. In Pulse Amplitude Modulation (PAM), the pulse height varies. In Pulse Width Modulation (PWM), the duration of pulses varies. In Pulse Position Modulation (PPM), the time position of pulses shifts. In Pulse Code Modulation (PCM), the signal is sampled, quantized, and encoded into binary digits, and is used in digital telephony, CDs, and computer audio.",
    "questions": [
      {
        "question": "In PAM, which property varies?",
        "options": [
          "Width",
          "Position",
          "Amplitude",
          "Frequency"
        ],
        "explanation": "In Pulse Amplitude Modulation (PAM), the amplitude or height of the pulses varies according to the information signal while other parameters remain constant.",
        "correctAnswer": [2]
      },
      {
        "question": "In PWM, which property varies?",
        "options": [
          "Width of pulses",
          "Amplitude",
          "Phase",
          "Frequency"
        ],
        "explanation": "In Pulse Width Modulation (PWM), the width or duration of the pulses varies according to the information signal while amplitude remains constant.",
        "correctAnswer": [0]
      },
      {
        "question": "PPM changes:",
        "options": [
          "Pulse width",
          "Pulse amplitude",
          "Pulse time position",
          "Frequency"
        ],
        "explanation": "In Pulse Position Modulation (PPM), the time position of the pulses shifts according to the information signal while amplitude and width remain constant.",
        "correctAnswer": [2]
      },
      {
        "question": "Which modulation is digital?",
        "options": [
          "PAM",
          "PCM",
          "PWM",
          "PPM"
        ],
        "explanation": "PCM (Pulse Code Modulation) is a digital modulation technique that converts analog signals to digital form through sampling, quantization, and encoding.",
        "correctAnswer": [1]
      },
      {
        "question": "PCM involves:",
        "options": [
          "Filtering and modulation",
          "Sampling, Quantization, Encoding",
          "Frequency division",
          "None"
        ],
        "explanation": "PCM involves three main steps: sampling the analog signal, quantizing the sampled values, and encoding them into binary digits.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_15": {
    "title": "Mobile Communication System Architecture",
    "passage": "A mobile communication system consists of Mobile Station (MS), Base Station (BS), and Mobile Switching Center (MSC). MS includes mobile equipment and SIM card. The BS handles radio communication and is controlled by a Base Station Controller (BSC). MSC manages switching, roaming, and billing. Cellular networks use frequency reuse to maximize spectrum. Handover transfers active calls between cells. GSM uses hard handover ('break before make'), while CDMA uses soft handover ('make before break').",
    "questions": [
      {
        "question": "Mobile Station consists of:",
        "options": [
          "Antenna + BTS",
          "SIM + Mobile Equipment",
          "MSC + BSC",
          "Only SIM"
        ],
        "explanation": "A Mobile Station (MS) consists of two main components: the SIM card (which contains subscriber information) and the mobile equipment (the actual phone hardware).",
        "correctAnswer": [1]
      },
      {
        "question": "Which manages switching and roaming?",
        "options": [
          "MS",
          "BS",
          "MSC",
          "BSC"
        ],
        "explanation": "The Mobile Switching Center (MSC) is responsible for managing call switching, roaming services, and billing functions in a mobile network.",
        "correctAnswer": [2]
      },
      {
        "question": "Frequency reuse is used for:",
        "options": [
          "Increasing antenna size",
          "Maximizing spectrum efficiency",
          "Reducing frequency",
          "Increasing cost"
        ],
        "explanation": "Frequency reuse is a technique used in cellular networks to maximize spectrum efficiency by reusing the same frequencies in non-adjacent cells.",
        "correctAnswer": [1]
      },
      {
        "question": "GSM uses which type of handover?",
        "options": [
          "Soft",
          "Hard",
          "Both",
          "None"
        ],
        "explanation": "GSM (Global System for Mobile Communications) uses hard handover, which follows a 'break before make' approach where the old connection is terminated before establishing a new one.",
        "correctAnswer": [1]
      },
      {
        "question": "Soft handover means:",
        "options": [
          "Break before make",
          "Make before break",
          "Frequency hopping",
          "None"
        ],
        "explanation": "Soft handover uses a 'make before break' approach where a new connection is established before terminating the old one, providing seamless connectivity.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_16": {
    "title": "Advanced Guided Media Technologies",
    "passage": "Guided media are physical channels such as cables/wires through which data is transmitted in a network. Types include twisted pair cable (UTP and STP), coaxial cable, and optical fiber. UTP is common in LANs, while STP provides extra shielding. Coaxial cable, used in TV and broadband, offers better shielding and bandwidth. Optical fiber, made from silica glass, transmits data with light at very high speeds and with immunity to electromagnetic interference. There are single-mode (long distance) and multimode (short distance) fiber types.",
    "questions": [
      {
        "question": "Which of the following is a feature of Unshielded Twisted Pair (UTP) cable?",
        "options": [
          "It is used only for satellite communication",
          "It includes a metallic shield",
          "It typically supports data rates up to 10 Gbps over 100 meters",
          "It is more expensive than coaxial cable"
        ],
        "explanation": "Modern UTP cables (like Cat 6A) can support data rates up to 10 Gbps over distances of 100 meters, making them suitable for high-speed LAN applications.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the main function of the cladding in an optical fiber cable?",
        "options": [
          "To transmit radio waves",
          "To increase data encryption",
          "To reflect light back into the core",
          "To provide power to devices"
        ],
        "explanation": "The cladding in optical fiber has a lower refractive index than the core, causing total internal reflection that keeps light signals within the core.",
        "correctAnswer": [2]
      },
      {
        "question": "Which medium is considered immune to electromagnetic interference?",
        "options": [
          "UTP",
          "STP",
          "Coaxial cable",
          "Optical fiber"
        ],
        "explanation": "Optical fiber is immune to electromagnetic interference because it uses light signals instead of electrical signals for data transmission.",
        "correctAnswer": [3]
      },
      {
        "question": "In which application is coaxial cable most commonly used?",
        "options": [
          "Bluetooth peripherals",
          "TV networks and broadband internet",
          "WAN backbone",
          "Satellite communication"
        ],
        "explanation": "Coaxial cable is widely used in television networks and broadband internet connections due to its excellent shielding properties and bandwidth capabilities.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the primary material used in the core of an optical fiber?",
        "options": [
          "Copper",
          "Aluminium",
          "Pure silica glass",
          "Steel"
        ],
        "explanation": "The core of optical fiber is made from pure silica glass, which provides excellent optical properties for light transmission with minimal loss.",
        "correctAnswer": [2]
      }
    ]
  },
  "passage_17": {
    "title": "Advanced Unguided Media Technologies",
    "passage": "Unguided or wireless media transmit data through electromagnetic waves without physical media. Types include radio waves (used in mobile phones and radio), microwaves (used in satellite and Wi-Fi, requiring line-of-sight), infrared (for short-range like TV remotes), and satellite communication, which covers wide areas for GPS and weather forecasting.",
    "questions": [
      {
        "question": "Which wireless medium requires line-of-sight between transmitter and receiver?",
        "options": [
          "Radio Waves",
          "Microwave",
          "Infrared",
          "Satellite"
        ],
        "explanation": "Microwave communication requires line-of-sight between transmitter and receiver because microwaves travel in straight lines and cannot penetrate obstacles effectively.",
        "correctAnswer": [1]
      },
      {
        "question": "Which device commonly uses infrared transmission?",
        "options": [
          "Mobile phones",
          "Wi-Fi routers",
          "TV remote controls",
          "Satellite dishes"
        ],
        "explanation": "TV remote controls commonly use infrared transmission for short-range communication with televisions and other home entertainment devices.",
        "correctAnswer": [2]
      },
      {
        "question": "Which medium provides global coverage for communication?",
        "options": [
          "Coaxial Cable",
          "Satellite Communication",
          "STP",
          "Infrared"
        ],
        "explanation": "Satellite communication provides global coverage by using satellites positioned in orbit to relay signals across vast distances worldwide.",
        "correctAnswer": [1]
      },
      {
        "question": "What is a common real-world use of radio waves?",
        "options": [
          "Fiber-optic networking",
          "TV broadcasting",
          "Digital video disc players",
          "Wired LANs"
        ],
        "explanation": "Radio waves are extensively used for TV broadcasting, allowing television signals to be transmitted over long distances to reach wide audiences.",
        "correctAnswer": [1]
      },
      {
        "question": "Which statement about wireless media is true?",
        "options": [
          "Signals cannot be sent over long distances",
          "It is also known as bounded media",
          "It is less secure than guided media",
          "It uses only visible light"
        ],
        "explanation": "Wireless media is generally less secure than guided media because wireless signals can be intercepted more easily as they propagate through open air.",
        "correctAnswer": [2]
      }
    ]
  },
  "passage_18": {
    "title": "Digital Electronics Fundamentals",
    "passage": "Digital electronics processes signals as discrete binary values (0s and 1s), using logic gates such as AND, OR, and NOT. Advantages over analog include high noise immunity, ease of storing/processing information, and flexibility. Common number systems include binary, decimal, octal, and hexadecimal. Circuits are classified as combinational (output depends on current input) or sequential (depends on input and memory). Applications include computers, communication, and embedded systems.",
    "questions": [
      {
        "question": "Which logic gate produces an output of 1 only if all its inputs are 1?",
        "options": [
          "OR",
          "NAND",
          "AND",
          "XOR"
        ],
        "explanation": "The AND gate produces an output of 1 only when all of its inputs are 1. If any input is 0, the output will be 0.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following is a universal gate?",
        "options": [
          "XOR",
          "NAND",
          "XNOR",
          "OR"
        ],
        "explanation": "NAND gate is a universal gate because any Boolean function can be implemented using only NAND gates, making it functionally complete.",
        "correctAnswer": [1]
      },
      {
        "question": "Which number system uses digits 0-7?",
        "options": [
          "Binary",
          "Octal",
          "Hexadecimal",
          "Decimal"
        ],
        "explanation": "The octal number system uses base 8 and employs digits from 0 to 7, making it useful for representing binary data in a more compact form.",
        "correctAnswer": [1]
      },
      {
        "question": "What type of circuit is a counter?",
        "options": [
          "Combinational",
          "Sequential",
          "Analog",
          "Modulator"
        ],
        "explanation": "A counter is a sequential circuit because its output depends on both current input and its internal memory (previous states), allowing it to count sequences.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is NOT an advantage of digital electronics?",
        "options": [
          "Easy to process information",
          "Prone to high noise",
          "Reliable and flexible",
          "Data can be encrypted"
        ],
        "explanation": "Being prone to high noise is actually a disadvantage. Digital electronics has high noise immunity, meaning it is resistant to noise, not prone to it.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_19": {
    "title": "Advanced Modulation Techniques",
    "passage": "Modulation involves varying a property of a high-frequency carrier signal according to an information signal. Analog modulation includes AM (amplitude varies), FM (frequency varies), and PM (phase varies). Digital modulation includes ASK, FSK, PSK, QAM. Modulation reduces antenna size, improves signal quality, enables multiplexing, and allows long-distance communication.",
    "questions": [
      {
        "question": "Which property changes in Amplitude Modulation (AM)?",
        "options": [
          "Carrier frequency",
          "Carrier amplitude",
          "Carrier phase",
          "Message frequency"
        ],
        "explanation": "In Amplitude Modulation (AM), the amplitude of the high-frequency carrier signal is varied in proportion to the information signal while frequency and phase remain constant.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main advantage of Frequency Modulation (FM) over AM?",
        "options": [
          "Simpler receiver",
          "Greater noise immunity",
          "Lower bandwidth",
          "Works only at low frequencies"
        ],
        "explanation": "FM has greater noise immunity than AM because noise primarily affects amplitude, and FM information is contained in frequency variations rather than amplitude changes.",
        "correctAnswer": [1]
      },
      {
        "question": "Which digital modulation technique changes the carrier frequency with data?",
        "options": [
          "ASK",
          "PSK",
          "FSK",
          "QAM"
        ],
        "explanation": "FSK (Frequency Shift Keying) changes the carrier frequency according to the digital data, using different frequencies to represent different binary states.",
        "correctAnswer": [2]
      },
      {
        "question": "Why is modulation necessary in communication?",
        "options": [
          "To increase antenna size",
          "To transmit baseband signals over long distances",
          "Only for voice signals",
          "To slow down data rate"
        ],
        "explanation": "Modulation is necessary to transmit baseband (low-frequency) signals over long distances by converting them to high-frequency signals that can propagate effectively.",
        "correctAnswer": [1]
      },
      {
        "question": "Which modulation scheme is widely used in Wi-Fi and LTE systems?",
        "options": [
          "AM",
          "FSK",
          "QAM",
          "PWM"
        ],
        "explanation": "QAM (Quadrature Amplitude Modulation) is widely used in modern Wi-Fi and LTE systems because it can achieve high data rates by combining both amplitude and phase modulation.",
        "correctAnswer": [2]
      }
    ]
  },
  "passage_20": {
    "title": "Advanced Pulse Modulation Techniques",
    "passage": "Pulse modulation transmits signals using pulses. Analog pulse techniques include PAM, PWM, and PPM. Pulse Code Modulation (PCM) is a digital technique involving sampling, quantization, and encoding. Applications include Ethernet, audio/video, and communication systems.",
    "questions": [
      {
        "question": "In which technique does the pulse amplitude represent the signal?",
        "options": [
          "PWM",
          "PCM",
          "PAM",
          "ASK"
        ],
        "explanation": "In PAM (Pulse Amplitude Modulation), the amplitude or height of the pulses directly represents the analog signal values at sampling instants.",
        "correctAnswer": [2]
      },
      {
        "question": "Which modulation is the first step in PCM?",
        "options": [
          "PWM",
          "PAM",
          "FSK",
          "QAM"
        ],
        "explanation": "PAM (Pulse Amplitude Modulation) is the first step in PCM, where the analog signal is sampled to produce amplitude-modulated pulses before quantization and encoding.",
        "correctAnswer": [1]
      },
      {
        "question": "Which pulse modulation method is digital?",
        "options": [
          "PAM",
          "PWM",
          "PCM",
          "PPM"
        ],
        "explanation": "PCM (Pulse Code Modulation) is a digital modulation method that converts analog signals to digital form through sampling, quantization, and binary encoding.",
        "correctAnswer": [2]
      },
      {
        "question": "What changes in Pulse Width Modulation (PWM)?",
        "options": [
          "Amplitude",
          "Width",
          "Position",
          "Phase"
        ],
        "explanation": "In PWM (Pulse Width Modulation), the width or duration of the pulses varies according to the signal amplitude while the amplitude of pulses remains constant.",
        "correctAnswer": [1]
      },
      {
        "question": "Where is Pulse Position Modulation (PPM) commonly used?",
        "options": [
          "TV remotes",
          "Optical communication",
          "Ethernet",
          "Motor control"
        ],
        "explanation": "PPM (Pulse Position Modulation) is commonly used in optical communication systems because it's efficient for transmitting digital data using light pulses.",
        "correctAnswer": [1]
      }
    ]
  }

  }
};

// Debug function to check data structure
export function debugQuestionsData() {
  console.log('=== DEBUG QUESTIONS DATA ===');
  console.log('allQuestionsData keys:', Object.keys(allQuestionsData));
  console.log('passage_based_questions exists:', 'passage_based_questions' in allQuestionsData);
  
  const passageData = (allQuestionsData as AllQuestionsData).passage_based_questions;
  if (passageData) {
    console.log('passage_based_questions keys:', Object.keys(passageData));
    console.log('First passage:', passageData.passage_1);
  } else {
    console.log('passage_based_questions is undefined');
  }
  console.log('=== END DEBUG ===');
}

// Function to get all passage questions
export function getAllPassageQuestions(): PassageQuestion[] {
  // Access the passage data directly from the raw data structure
  const passageData = (allQuestionsData as AllQuestionsData).passage_based_questions;
  
  if (!passageData) {
    console.error('passage_based_questions not found in allQuestionsData');
    return [];
  }
  
  const result = Object.values(passageData) as PassageQuestion[];
  return result;
}

// Function to get passage questions without shuffling (sequential order)
export function getPassageQuestions(): Question[] {
  const passageQuestions: Question[] = [];
  const passageData = (allQuestionsData as AllQuestionsData).passage_based_questions;
  
  if (!passageData) {
    return [];
  }
  
  const passages = Object.values(passageData) as PassageQuestion[];
  
  passages.forEach((passage: PassageQuestion) => {
    // Add passage title as a context question (optional, for display purposes)
    passageQuestions.push(...passage.questions);
  });
  
  // Return questions in sequential order without shuffling
  return passageQuestions;
}

  // For the "all" mode, combine questions from all weeks
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Function to shuffle options while preserving correct answers
  const shuffleOptions = (question: Question): Question => {
    const originalOptions = [...question.options];
    const correctAnswer = Array.isArray(question.correctAnswer) 
      ? question.correctAnswer
      : [question.correctAnswer]; // Handle both formats
    
    // Track which options are correct by value
    const correctOptionValues = correctAnswer.map(index => originalOptions[index]);
    
    // Create a new question with shuffled options
    const shuffledOptions = shuffleArray([...question.options]);
    
    // Find the new indices of the correct answers
    const newCorrectAnswers = correctOptionValues.map(value => 
      shuffledOptions.findIndex(option => option === value)
    );
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswers,
    };
  };
  
  // Function to get questions based on mode
  export function getAllQuestions(mode: PracticeMode): Question[] {
    const weekQuestions = allQuestionsData as WeekQuestions;
    // For the "assignment" mode, combine and randomize questions from all weeks
   if (mode === "assignment") {
    let allQuestions: Question[] = [];
    // Gather questions from all weeks (excluding assignment)
    for (const week in weekQuestions) {
      if (week !== "assignment" && week !== "passage_based_questions") {
        allQuestions = [...allQuestions, ...(weekQuestions[week] as Question[])];
      }
    }
    // Shuffle all questions and their options
    return shuffleArray(allQuestions).map((q) => shuffleOptions(q));
  }

  // For the "passage" mode, return passage questions in sequential order (no shuffling)
  if (mode === "passage") {
    return getPassageQuestions();
  }

  // For the "demo-exam" mode, return combined MCQ and passage questions
  if (mode === "demo-exam") {
    return getAllDemoExamQuestions();
  }
  
    // For the "all" mode, combine questions from all weeks
    if (mode === "all") {
      let allQuestions: Question[] = [];
      for (const week in weekQuestions) {
        if (week !== "passage_based_questions") {
          allQuestions = [...allQuestions, ...(weekQuestions[week] as Question[])];
        }
      }
      // Shuffle all questions and their options
      return shuffleArray(allQuestions).map(q => shuffleOptions(q));
    }
  
    // Handle specific week or assignment mode
    if (weekQuestions[mode] && Array.isArray(weekQuestions[mode]) && (weekQuestions[mode] as Question[]).length > 0) {
      // Return shuffled questions with shuffled options for the specific mode
      return shuffleArray(weekQuestions[mode] as Question[]).map(q => shuffleOptions(q));
    }
  
    // Fallback - if mode doesn't exist or has no questions
    console.error(`No questions found for mode: ${mode}`);
  
    // Return default questions instead of empty array
    return shuffleArray(
      (weekQuestions.module1 as Question[]) || [
        {
          question: "Default question when no questions are found",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: [0],
          explanation:
            "This is a placeholder question since no questions were found for the selected mode.",
        },
      ]
      ).map(q => shuffleOptions(q));
}

// Function to get demo exam questions (20 MCQ + 20 from 4 passages)
export function getDemoExamQuestions(): { mcqQuestions: Question[], passageQuestions: PassageQuestion[] } {
  const weekQuestions = allQuestionsData as WeekQuestions;
  
  // Get 20 random MCQ questions from all modules and assignment
  let allMcqQuestions: Question[] = [];
  for (const week in weekQuestions) {
    if (week !== "passage_based_questions") {
      allMcqQuestions = [...allMcqQuestions, ...(weekQuestions[week] as Question[])];
    }
  }
  
  console.log('Total MCQ questions available:', allMcqQuestions.length);
  
  // Shuffle and pick 20 MCQ questions
  const shuffledMcq = [...allMcqQuestions].sort(() => 0.5 - Math.random());
  const selectedMcq = shuffledMcq.slice(0, 20).map(q => shuffleOptions(q));
  
  console.log('Selected MCQ questions:', selectedMcq.length);
  
  // Get 4 random passages
  const passageData = (allQuestionsData as AllQuestionsData).passage_based_questions;
  if (!passageData) {
    console.error('No passage data found!');
    return { mcqQuestions: selectedMcq, passageQuestions: [] };
  }
  
  const allPassages = Object.values(passageData) as PassageQuestion[];
  console.log('Total passages available:', allPassages.length);
  
  const shuffledPassages = [...allPassages].sort(() => 0.5 - Math.random());
  const selectedPassages = shuffledPassages.slice(0, 4);
  
  console.log('Selected passages:', selectedPassages.length);
  console.log('Selected passage titles:', selectedPassages.map(p => p.title));
  
  // Use all questions from each selected passage (not just first 5)
  const finalPassages = selectedPassages.map(passage => ({
    ...passage,
    questions: passage.questions // Use all questions from each passage
  }));
  
  const totalPassageQuestions = finalPassages.reduce((total, passage) => total + passage.questions.length, 0);
  console.log('Total passage questions:', totalPassageQuestions);
  
  return {
    mcqQuestions: selectedMcq,
    passageQuestions: finalPassages
  };
}

// Function to get all demo exam questions as a single flattened array
export function getAllDemoExamQuestions(): Question[] {
  const { mcqQuestions, passageQuestions } = getDemoExamQuestions();
  
  // Combine MCQ questions and passage questions
  const allPassageQuestions = passageQuestions.flatMap(passage => passage.questions);
  
  return [...mcqQuestions, ...allPassageQuestions];
}