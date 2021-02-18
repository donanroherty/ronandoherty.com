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

    const items: Items = {}

    fields.forEach((field) => {
        if (field === 'slug') {
            const title: string = data['title']
            const slug: string = title.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase()
            items[field] = slug
        }
        if (field === 'content') {
            items[field] = content
        }
        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: Array<keyof PostType>) {
    const filenames = getPostSlugs()

    const posts = filenames
        .map(file => getPostBySlug(file, fields))
        .sort((a, b) => a.date > b.date ? -1 : 1)

    return posts
}