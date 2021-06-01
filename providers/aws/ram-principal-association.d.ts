import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RamPrincipalAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html#principal RamPrincipalAssociation#principal}.
     */
    readonly principal: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html#resource_share_arn RamPrincipalAssociation#resource_share_arn}.
     */
    readonly resourceShareArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association}.
 */
export declare class RamPrincipalAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RamPrincipalAssociationConfig);
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _resourceShareArn;
    get resourceShareArn(): string;
    set resourceShareArn(value: string);
    get resourceShareArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
