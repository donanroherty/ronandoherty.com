import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '../types/post'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[]) {
    const fullPath = join(postsDirectory, slug, `index.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if (field === 'slug') {
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

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs()

    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((a, b) => a.date > b.date ? -1 : 1)

    return posts
}