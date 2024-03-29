import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
     
      <div className="mb-8 md:mb-16 sm:mx-0 mx-auto flex justify-center mt-[100px]">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
    
    </>
  )
}
