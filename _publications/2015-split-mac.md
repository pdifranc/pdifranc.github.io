---
title: "A Split MAC Approach for SDR Platforms"
collection: publications
permalink: /publication/2015-split-mac
date: 2015-04-01
venue: 'IEEE Transactions on Computers'
paperurl: '/files/pdf/research/2015SplitMAC.pdf'
link: 'https://doi.org/10.1109/TC.2014.2308197'
citation: 'P. Di Francesco, S. McGettrick, U.K. Anyanwu, A.B. MacKenzie, and L.A. DaSilva. 2015. &quot;A Split MAC Approach for SDR Platforms.&quot; <i>IEEE Transactions on Computers</i> 64(4): 912-924. doi: 10.1109/TC.2014.2308197'
---

Implementation of carrier sensing-based medium access control (MAC) protocols on inexpensive reconfigurable radio platforms has proven challenging due to long and unpredictable delays associated with both signal processing on a general purpose processor (GPP) and the interface between the radio frequency (RF) front end and the GPP. This paper describes the development and implementation of a split-functionality architecture for a contention-based carrier sensing MAC, in which some of the functions reside on a field-programmable gate array (FPGA) and others reside in the GPP. We provide an FPGA-based implementation of a carrier sensing block and develop two versions of a carrier sense multiple access (CSMA) MAC protocol based upon this block. We experimentally test the performance of the resulting protocols in a multihop environment in terms of end-to-end throughput and required frame retransmissions. We cross-validate these results with a network simulator with modules modified to reflect the mean and variance of delays measured in components of the real software-defined radio system.
