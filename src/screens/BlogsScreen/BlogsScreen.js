import React, { Component } from 'react';
import styles from 'screens/BlogsScreen/BlogsScreenStyle';
import BlogBox from 'components/BlogBox/BlogBox';
import data from 'screens/BlogsScreen/data.json'; 

class BlogsScreen extends Component {
  render() {
    return (
        <div style={styles.screen}>
          <p style={styles.titleText}>BLOG</p>
          <div style={{position: 'relative', display:'flex', flexDirection: "row"}}>
                {
					data.Blogs.map((entries, i) => {
						return (
							<div key={i}>
								<div>
									<div>
											{entries.information.map(function (info, i) { 
												return <div key={i}>
												<BlogBox 
													header= {info.title}
													date= {info.publishDate}
													description= {info.description}
													space= {info.space}
												/>
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        </div>
    );
  }
}

export default BlogsScreen;