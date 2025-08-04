

import ChatForum from '@/components/chatForum';
export default async function Page({ params }) {
     
  const slug = (await params).slug
  // console.log(slug);
  
  return <ChatForum slug={slug}/>

}