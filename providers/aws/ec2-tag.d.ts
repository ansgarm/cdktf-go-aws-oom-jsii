import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TagConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html#key Ec2Tag#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html#resource_id Ec2Tag#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html#value Ec2Tag#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html aws_ec2_tag}.
 */
export declare class Ec2Tag extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html aws_ec2_tag} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2TagConfig);
    get id(): string;
    private _key;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _value;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
