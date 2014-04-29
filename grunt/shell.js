module.exports = {
  createSitemapList: {
    command: "echo '  <url><loc>http://islovely.co/" + '<%= urls.join("</loc></url>\n  <url><loc>http://islovely.co/") %>' + "</loc></url>' > sitemap-src/list.xml"
  }
};
