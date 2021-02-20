import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '../types/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostFilenames() {
    return fs.readdirSync(postsDirectory)
}

export function getPostByFilename(filename: string, fields: string[]) {
    const realSlug = filename.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)

    let postData: Partial<PostType> = {}

    fields.forEach((field) => {
        if (field === 'slug') {
            const seperatorIdx = realSlug.indexOf('--')
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

export function getFilenameFromSlug(slug: string) {
    const files = getPostFilenames()
    const slugFile = files.find(((file) => {
        const filename = file.replace(/\.md$/, '')
        const sepIdx = file.indexOf('--')
        const substr = filename.substr(sepIdx + 2)
        return encodeURIComponent(substr) === slug
    }))
    return slugFile
}

export function getAllPosts(fields: Array<keyof PostType>) {
    const filenames = getPostFilenames()

    let posts = filenames
        .map(name => getPostByFilename(name, fields))
        .sort((a, b) => (a.date && b.date) ? (a.date > b.date ? -1 : 1) : 0)

    return posts
}