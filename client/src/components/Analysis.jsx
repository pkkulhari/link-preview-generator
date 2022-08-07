import icons from '../constants/icons'
import AnalysisCard from './AnalysisCard'
import ListItem from './ListItem'

const Analysis = ({ metadata }) => {
  const { metaTags, ogTags, twitterTags } = metadata

  return (
    <div className="flex flex-col gap-7 w-full mt-20 md:mt-14">
      <AnalysisCard
        title="Meta Tags"
        icon={Object.keys(metaTags).length !== 0 ? icons.checkMark : icons.crossMark}
      >
        <ListItem tag={metaTags?.title}>title</ListItem>
        <ListItem tag={metaTags?.description}>description</ListItem>
        <ListItem tag={metaTags?.url}>url</ListItem>
      </AnalysisCard>
      <AnalysisCard
        title="OG Tags"
        icon={Object.keys(ogTags).length !== 0 ? icons.checkMark : icons.crossMark}
      >
        <ListItem tag={ogTags?.title}>og:title</ListItem>
        <ListItem tag={ogTags?.description}>og:description</ListItem>
        <ListItem tag={ogTags?.site_name}>og:site_name</ListItem>
        <ListItem tag={ogTags?.url}>og:url</ListItem>
        <ListItem tag={ogTags?.image}>og:image</ListItem>
      </AnalysisCard>
      <AnalysisCard
        title="Twitter Tags"
        icon={Object.keys(twitterTags).length !== 0 ? icons.checkMark : icons.crossMark}
      >
        <ListItem tag={twitterTags?.title}>twitter:title</ListItem>
        <ListItem tag={twitterTags?.description}>twitter:description</ListItem>
        <ListItem tag={twitterTags?.card}>twitter:card</ListItem>
        <ListItem tag={twitterTags?.image}>twitter:image</ListItem>
      </AnalysisCard>
    </div>
  )
}

export default Analysis
