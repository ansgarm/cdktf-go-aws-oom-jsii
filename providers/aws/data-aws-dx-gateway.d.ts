import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDxGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_gateway.html#name DataAwsDxGateway#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_gateway.html aws_dx_gateway}.
 */
export declare class DataAwsDxGateway extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_gateway.html aws_dx_gateway} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsDxGatewayConfig);
    get amazonSideAsn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
