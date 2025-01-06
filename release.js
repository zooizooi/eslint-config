const { execSync } = require('child_process');

try {
    const version = process.env.npm_package_version;
    execSync(`gh release create v${version}`, { stdio: 'inherit' });
    console.log(`Successfully created release v${version}`);
} catch (error) {
    console.error('Release creation failed:', error);
    process.exit(1);
}