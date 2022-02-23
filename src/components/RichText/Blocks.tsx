import * as React from "react";

export const NullComponent = () => <></>;

export class EmbeddedBlock {
  props: any;
  Comp: React.FunctionComponent<any>;
  blockId: string;
  constructor(node: any) {
    const data: any = node.references;
    const id: string = data.blockId;
    const type: string = "type" in data && data.type;
    this.props = undefined;
    this.Comp = NullComponent;
    this.blockId = id;
    switch (type) {
      default:
        console.log(`no block component found for data:`, node);
    }
  }
  render() {
    const Jsx: React.FunctionComponent<any> = this.Comp;
    const props = this.props;
    return <Jsx {...props} />;
  }
  setProps(props: object) {
    this.props = props ? props : undefined;
  }
  setComp(Comp: React.FunctionComponent<any>) {
    this.Comp = React.isValidElement(<Comp />) ? Comp : NullComponent;
  }
}
