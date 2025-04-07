#!/bin/bash

echo "🚀 Setting up your Next.js template..."

# Install dependencies
npm install

# Setup Husky
npm run prepare

# Initialize Git (optional)
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git initialized."
fi

# Commit the initial state
git add .
git commit -m "chore: initial setup"

echo "🎉 Setup complete! Run 'npm run dev' to start the project."
