import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RamResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html#resource_arn RamResourceAssociation#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html#resource_share_arn RamResourceAssociation#resource_share_arn}.
     */
    readonly resourceShareArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html aws_ram_resource_association}.
 */
export declare class RamResourceAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html aws_ram_resource_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RamResourceAssociationConfig);
    get id(): string;
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _resourceShareArn;
    get resourceShareArn(): string;
    set resourceShareArn(value: string);
    get resourceShareArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
