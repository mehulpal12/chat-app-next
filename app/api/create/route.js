import { StreamChat } from "stream-chat";
// Define values.
const api_key = "tsqa7cfk2cdc";
const api_secret = "7kfqzy3ma44pgrpy2p6maad7mackudv656jqhxuby3mdq6ru6yjn74m93vvpvhcg";
const user_id = "user_300QKAn2ZJFUiznUvYNvKu4nRUl";
export async function GET() {
    // Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id, Math.floor(Date.now() / 1000) + 60 * 60);
console.log(token);


    return Response.json({message:"hello world"})
}