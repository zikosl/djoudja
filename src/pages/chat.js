import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
    Chat,
    Channel,
    Window,
    ChannelHeader,
    MessageList,
    MessageInput,
    Thread,
    LoadingIndicator,
    ChannelList,
    useChatContext
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css'
// const apiKey = "ezjdksdas6eervrt66vx2ejfhndtsccrxzcsdg4kkt4szp7ja9usy8gx4yxj65jp"
const user =
{
    id: 'john',
    name: 'john',
    image: 'htpps://getstream.imgix.net/images/random_svg/FS.png',
}
const filters = { type: 'messaging', members: { Sin: [user.id] } }
const sort = { last_message_at: -1 }
function CustomChannel(props) {
    const { channel, setActiveChannel } = props
    const { messages } = channel.state
    const lastMessage = messages[messages.length - 1]
    return (
        <button onClick={() => setActiveChannel(channel)
        }
            style={{ margin: '12px' }}>
            <div>{channel.data.name || 'Unnamed Channel'}</div>
            <div style={{ fontSize: '14px' }}>{lastMessage}</div>

        </button>
    )
}
function CustomChannelHeader() {
    const { channel } = useChatContext()
    const { data } = channel
    return (
        <header
            style={{
                height: '40px',
                backgroundcolor: 'white',
                marginBottom: '20px',
                borderRadius: '10px',
                marginRight: '10px',

            }}
            src={data.image}
            alt=""
        />
    )


}




const Cchat = () => {

    const [client, SetClient] = useState(null)
    const [channel, setChannel] = useState(null)

    useEffect(() => {
        async function init() {
            const chatClient = StreamChat.getInstance('mfyq9hmf7dcj', 'ezjdksdas6eervrt66vx2ejfhndtsccrxzcsdg4kkt4szp7ja9usy8gx4yxj65jp')
            await chatClient.connectUser(user, chatClient.devToken(user.id))
            const channel = chatClient.channel('messaging', 'react-talk', {
                image: 'htpps://www.drupal.org/files/project-images/react.png',
                name: 'talk about react',
                members: [user.id],
            })
            await channel.watch()
            setChannel(channel)
            SetClient(chatClient)


        }
        init()
        if (client) return () => client.disconnectUser()


    }, [])
    if (!channel || !client) return <LoadingIndicator />
    return (
        <Chat client={client} theme="messaging light" >
            <ChannelList
                filters={filters}
                sort={sort}
                Preview={CustomChannel}
            />
            <Channel>
                <Window>
                    <CustomChannelHeader />
                    <MessageList />
                    <MessageInput />

                </Window>
                <Thread />
            </Channel>
        </Chat>


    )
}

export default Cchat
