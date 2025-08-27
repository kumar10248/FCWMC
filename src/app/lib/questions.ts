import { Question, WeekQuestions, PracticeMode } from "../types";

export function getAllQuestions(mode: PracticeMode): Question[] {
  const weekQuestions: WeekQuestions = {
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
]
          
    
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
  const getQuestionsByMode = (mode: PracticeMode, weekQuestions: WeekQuestions): Question[] => {
    // For the "ultimate" challenge mode, combine and randomize questions from all weeks
   
  
    // For the "all" mode, combine questions from all weeks
    if (mode === "all") {
      let allQuestions: Question[] = [];
      for (const week in weekQuestions) {
        allQuestions = [...allQuestions, ...weekQuestions[week]];
      }
      // Shuffle all questions and their options
      return shuffleArray(allQuestions).map(q => shuffleOptions(q));
    }
  
    // Handle specific week or assignment mode
    if (weekQuestions[mode] && weekQuestions[mode].length > 0) {
      // Return shuffled questions with shuffled options for the specific mode
      return shuffleArray(weekQuestions[mode]).map(q => shuffleOptions(q));
    }
  
    // Fallback - if mode doesn't exist or has no questions
    console.error(`No questions found for mode: ${mode}`);
  
    // Return default questions instead of empty array
    return shuffleArray(
      weekQuestions.week1 || [
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
    return getQuestionsByMode(mode, weekQuestions);
  }