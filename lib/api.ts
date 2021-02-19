import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '../types/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(file: string, fields: string[]) {
    const realFilePath = file.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realFilePath}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    let postData: Partial<PostType> = {}

    fields.forEach((field) => {
        if (field === 'slug') {
            const title: string = data['title']
            const slug: string = encodeURIComponent(title.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase())
            postData.slug = slug
        }
        if (field === 'content') {
            postData.content = content
        }
        if (data[field]) {
            postData[field as keyof PostType] = data[field]
        }
    })

    return postData
}

export function getAllPosts(fields: Array<keyof PostType>) {
    const filenames = getPostSlugs()

    let posts = filenames
        .map(file => getPostBySlug(file, fields))
        .sort((a, b) => (a.date && b.date) ? (a.date > b.date ? -1 : 1) : 0)

    return posts
}