import { useState } from 'react';
import { Orbis } from "@orbisclub/orbis-sdk";
const orbis = new Orbis({});

function Transaction() {

    // handlePost=> orbis -> ipfs -> mint.
    // orbis => stream id. Stream id => ipfs.


    const [user, setUser] = useState();
    const [streamId, setStreamId] = useState("")

    const connect = async () => {
        // const res = await orbis.connect_v2({ chain: "ethereum", lit: false });
        const res = await orbis.connect_v2({
            provider: window.phantom?.solana,
            chain: "solana",
            lit: true
        });

        if (res.status === 200) {
            setUser(res.did);
        } else {
            console.log("Error connecting to Ceramic: ", res);
            alert("Error connecting to Ceramic.");
        }
    }

    console.log(user, "user");

    const createPost = async () => {

        const content = {
            body: 'This is a post p1',
            title: 'This is a heading of post p1',
        }

        const res = await orbis.createPost(content);

        // Store the doc id/stream Id(Post Id)  on ipfs 
        setStreamId(res)
        console.log(res, "createPost Response");
    }

    const handleReact = async () => {
        // Like , downvotes , haha
        // const res = await orbis.react(streamId?.doc, "like");
        const res = await orbis.react(streamId?.doc, "like");

        console.log(res);
    }

    const getPost = async () => {
        const { data, error } = await orbis.getPost(streamId?.doc);

        console.log(data);
    }

    return (
        <div>
            <div>

                {user ?
                    <p>Connected with: {user}</p>
                    :
                    <button onClick={() => connect()}>Connect</button>
                }
            </div>
            <div>
                <button onClick={() => createPost()}>
                    Create Post
                </button>
            </div>
            <div>
                <button onClick={() => handleReact()}>
                    React on Post
                </button>
            </div>
            <div>
                <button onClick={() => getPost()}>
                    Fetch Post
                </button>
            </div>
        </div>
    )
}

export default Transaction;