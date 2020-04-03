import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown'

const Home: NextPage<{ content: any }> = ({ content }) => {
  console.log("Summary", content)
  return <ReactMarkdown source={content} />

}


Home.getInitialProps = async ({ req }) => {
  const content = await require(`../markdown.md`)
  // const content = await import("../content/summary.json");

  return { content: content.default }
};


export default Home;
