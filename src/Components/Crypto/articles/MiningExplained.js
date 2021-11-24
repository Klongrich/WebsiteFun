import React from 'react'
import styled from "styled-components";


export const Container = styled.div`

    h2 {
        margin-top: 30px;
    }


`

export default function MiningExplained() {

    return (
        <>
            <Container>
                <h2> Mining Explained (High level Overview) </h2>

                <p>
                    Crypto Mining sounds complicated at first right? A bunch of computers
                    “solving really complicated math problems” as most people would try to
                    explain it. To be honest it really is not as complicated as it sounds. Mining
                    is referred to as PoW or (Proof Of Work). This is where a computer has to
                    try and guess a number. In bitcoin's case they use the SHA256 hashing algorithm.
                    This is a set of steps that encrypts a sentence or word.
            </p>

                <p Style="text-align: center; font-weight: bold;">
                    The Word “Example” = D029F87E3D80F8FD9B1BE67C7426B4CC1FF
                    47B4A9D0A8461C826A59D8C5EB6CD
            </p>


                <h2>Scary Looking, Right?</h2>

                <p>
                    With this algorithm (SHA256) there are potentially 2^256 different possible
                    combinations that can be created. Yes, 2^256 is a very very, very large number.
                    Just to give you an idea of how big that number is Earth has about 10^50 = 2^166
                    atoms. No computer would be able to check that many different solutions within
                    a reasonable time at all.
            </p>

                <h2> So Why Is This Important? </h2>

                <p>
                    Because computers are trying to essentially guess one of these combinations.
                    Not all 2^256 but a large amount. As more and more computing power is added
                    into the bitcoin network the amount of possible combinations the network is
                    checking for increases. This increases the amount of power it takes to mine
                    bitcoins because the computers all have to check more and more combinations.
                    With so many combinations it makes it so no one computer can guess the number
                    ahead of time. Meaning that there is always an element of randomness within
                    the network.
            </p>

                <h2> What is a “Block” In The Network? </h2>

                <p>
                    When a computer guesses the correct number / combination that computer
                    is given what is called a “block” from the bitcoin network. A block is a list of transactions
                    that are being made between people in the Bitcoin network. This computer then takes
                    the list of transactions and stores them in a database called “the ledger” (note database
                    may be kind of a bad word to use). The computer also gets rewarded with Bitcoin.
            </p>


                <h2> Importance of Nodes / Ledgers </h2>

                <p>
                    Then in order for each computer to participate in the next round of guessing or “mining”
                    , they must have copied that transaction from that computer. Then before the guessing
                    or “mining” begins every computer cross references each other's ledgers to make sure
                    everyone is up to date on the transactions that went on in the network. This then confirms
                    the transactions. If one computer is not up to date or has incorrect transactions recorded
                    they will not be able to take place in the “mining” of the next block therefore have no
                    chance at gaining more bitcoin.
            </p>

                <h2> This Is What Keeps Transactions Secure Within The Network </h2>

                <p>
                    If people want to mine and make money / bitcoin they have to have the correction
                    transactions. If they do not they can not mine and have no chance at producing
                    income. As I’m writing this there are about 9,000+ “nodes” that have to be checked
                    and cross referenced with their ledgers that are spread out in the world. You can
                    almost think of this as having 9,000+ servers around the world verus only less than 100
                    data centers that most big tech companies have spread out in which they control.
            </p>

                <h2> Conclusion </h2>

                <p>
                    Anyone can become a node and join the network as long as they have the minimum
                    hardware and internet connection to do so. You can not do this for google, microsoft,
                    facebook, banks, etc as they own and control all the data within their servers. This
                    could lead to corruption and potential hacks. Bitcoin is open-source and anyone can
                    join the network meaning not one person or company owns the data or can control it.
                    This made it a very cool project / idea that ended up to succeed it it’s own way.
            </p>

                <h2> Problems With Mining </h2>

                <p>
                    Above is the ideal serino that was first planned out when Bitcoin decided to launch.
                    However as time went on a few different problems arrose within the network.
            </p>

                <h2> ASCI </h2>

                <p>
                    One being the inventions of mining specific hardware called ASICs that would mine
                    Bitcoin more efficiently than other computers. This meaning that people with this
                    hardware can produce the same amount of Bitcoin but with less electricity thus given
                    them a massive advantage over other people within the network. Why? Because they can
                    potentially swing and manipulate the market in a way if they are ahead enough of the
                    other miners. This also creates a more and more centeralized network which is owned
                    and operated by the miners.
            </p>

                <h2> Electrical Cost </h2>

                <p>
                    Also it is estimated that about $1 million a day in electrical costs are being spent
                    on securing and mining the BTC and ETH block-chain which is not very efficient and
                    scalable considering that the difficulty of mining only goes up meaning more and more
                    electricity would be needed.
            </p>

                <h2> Scalability </h2>

                <p>
                    Block-size with this model means that the network can not handle that many transactions
                    per second. Right now the Bitcoin network can only handle about 5 - 6 transactions per
                    second. Yes that is all, only 5 - 6. This is why when you send Bitcoin it sometimes
                    can take hours depending on how many other people are currently using the network.
                    If we do the math, at 5 - 6 transactions per second is only 300 a minute and 18,000
                    and hour which is not that much considering the amount of people there are.
            </p>

            </Container>
        </>
    );
}