import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#name WafregionalIpset#name}.
     */
    readonly name: string;
    /**
     * ip_set_descriptor block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#ip_set_descriptor WafregionalIpset#ip_set_descriptor}
     */
    readonly ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[];
}
export interface WafregionalIpsetIpSetDescriptor {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#type WafregionalIpset#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#value WafregionalIpset#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset}.
 */
export declare class WafregionalIpset extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalIpsetConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ipSetDescriptor?;
    get ipSetDescriptor(): WafregionalIpsetIpSetDescriptor[];
    set ipSetDescriptor(value: WafregionalIpsetIpSetDescriptor[]);
    resetIpSetDescriptor(): void;
    get ipSetDescriptorInput(): WafregionalIpsetIpSetDescriptor[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
