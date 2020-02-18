import React from "react"

const Form = ({headline, copy}) => {

  return(
    <div className="kits">
            <div className="container">
                <h2>Kits</h2>
                <p>NEED</p>
                <Tabs>
                    <TabList>
                        {props.data.allWordpressWpKits.edges.map((kit) => (
                        <Tab>
                            <h4>{kit.node.kit_name}</h4>
                        </Tab>
                        ))}
                    </TabList>
                    {props.data.allWordpressWpKits.edges.map((kit) => (
                        <TabPanel>
                            <div className="grid-5 main-info">
                                <p>{kit.node.acf.kit_copy}</p>
                                <div className="products">
                                    <h4>Products I Recommend</h4>
                                    <Button
                                        link="/#"
                                        title="Buy this kit"
                                    />
                                    <div className="items">
                                    {kit.node.acf.kit_item.map((kititem) => (
                                        <div className="item">
                                            <a href={kititem.link}>
                                                <img src={kititem.image.source_url} alt={kititem.image.alt_text} />
                                                <h4>{kititem.name}</h4>
                                            </a>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <img src={kit.node.acf.kit_image.source_url} alt={kit.node.acf.kit_image.alt_text} className="grid-6" />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
  )
}

export default Form