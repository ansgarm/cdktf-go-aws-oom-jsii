import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxConnectionAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html#connection_id DxConnectionAssociation#connection_id}.
     */
    readonly connectionId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html#lag_id DxConnectionAssociation#lag_id}.
     */
    readonly lagId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association}.
 */
export declare class DxConnectionAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxConnectionAssociationConfig);
    private _connectionId;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    get id(): string;
    private _lagId;
    get lagId(): string;
    set lagId(value: string);
    get lagIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
